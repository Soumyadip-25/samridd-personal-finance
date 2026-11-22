/**
 * SAMRIDD Money Utility (lib/money.ts)
 * 
 * Non-negotiable Principle §A.7: Zero floating-point arithmetic on money.
 * All monetary amounts are handled internally as integer paise (1 Rupee = 100 Paise).
 * Never use parseFloat() or direct floating multiplication/division on currency values.
 */

/**
 * Parses a rupee string (e.g. "1250.50", "1,250", "50.5") or number into integer paise.
 * Throws an Error if format is invalid to protect ledger integrity.
 */
export function toPaise(input: string | number): number {
  if (typeof input === 'number') {
    if (!Number.isFinite(input)) {
      throw new Error(`Invalid monetary amount: ${input}`);
    }
    // If it's already an integer, check if it's treated as rupees or if fractional
    const str = input.toString();
    return toPaise(str);
  }

  // Clean string: strip commas and trim spaces
  const cleanStr = input.replace(/,/g, '').trim();
  if (!cleanStr) {
    return 0;
  }

  const isNegative = cleanStr.startsWith('-');
  const unsignedStr = isNegative ? cleanStr.slice(1) : cleanStr;

  // Validate exact decimal format: max 2 decimal places
  if (!/^\d+(\.\d{1,2})?$/.test(unsignedStr)) {
    throw new Error(`Invalid currency format: "${input}". Expected format like "1250" or "1250.50"`);
  }

  const [rupeesPart = '0', paisePart = ''] = unsignedStr.split('.');
  const normalizedPaise = (paisePart + '00').slice(0, 2);

  const rupees = parseInt(rupeesPart, 10);
  const paise = parseInt(normalizedPaise, 10);

  const totalPaise = rupees * 100 + paise;
  return isNegative ? -totalPaise : totalPaise;
}

/**
 * Converts integer paise into a 2-decimal rupee string suitable for database APIs or inputs (e.g. 125050 -> "1250.50").
 */
export function toRupees(paise: number): string {
  if (!Number.isInteger(paise)) {
    throw new Error(`Paise must be an integer, received: ${paise}`);
  }

  const isNegative = paise < 0;
  const absPaise = Math.abs(paise);
  const rupees = Math.floor(absPaise / 100);
  const remainder = absPaise % 100;
  const paiseStr = remainder.toString().padStart(2, '0');

  return `${isNegative ? '-' : ''}${rupees}.${paiseStr}`;
}

/**
 * Sums an arbitrary list of paise amounts safely.
 */
export function addPaise(...amounts: number[]): number {
  return amounts.reduce((acc, curr) => {
    if (!Number.isInteger(curr)) {
      throw new Error(`Cannot add non-integer paise: ${curr}`);
    }
    return acc + curr;
  }, 0);
}

/**
 * Subtracts b from a in paise (a - b).
 */
export function subPaise(a: number, b: number): number {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error(`Cannot subtract non-integer paise: a=${a}, b=${b}`);
  }
  return a - b;
}

/**
 * Formats integer paise into Indian Rupee display format using standard en-IN grouping (Lakhs & Crores).
 * Example: 123456789 paise = ₹12,34,567.89
 */
export function formatINR(
  paise: number,
  options?: {
    showSign?: boolean;
    compact?: boolean;
  }
): string {
  const isNegative = paise < 0;
  const absPaise = Math.abs(paise);
  const rupees = absPaise / 100;

  if (options?.compact) {
    if (rupees >= 10000000) {
      // Crores
      const cr = (rupees / 10000000).toFixed(2);
      return `${isNegative ? '-' : ''}₹${cr} Cr`;
    }
    if (rupees >= 100000) {
      // Lakhs
      const lk = (rupees / 100000).toFixed(2);
      return `${isNegative ? '-' : ''}₹${lk} L`;
    }
  }

  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formatted = formatter.format(rupees);
  if (isNegative) {
    return `-${formatted}`;
  }
  if (options?.showSign && paise > 0) {
    return `+${formatted}`;
  }
  return formatted;
}
