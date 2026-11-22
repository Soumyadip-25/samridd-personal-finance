/**
 * SAMRIDD Dates Utility (lib/dates.ts)
 * 
 * Non-negotiable Principle §A.7 & D-10:
 * Dates are stored and transmitted as YYYY-MM-DD strings without timezone drift.
 * "Today" is computed in Indian Standard Time (Asia/Kolkata).
 */

/**
 * Returns today's date in IST formatted as YYYY-MM-DD.
 */
export function getTodayIST(): string {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return formatter.format(new Date()); // Outputs YYYY-MM-DD in en-CA
}

/**
 * Parses a YYYY-MM-DD string into year, month, day integers.
 */
export function parseDateParts(dateStr: string): { year: number; month: number; day: number } {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    throw new Error(`Invalid date format: "${dateStr}". Expected YYYY-MM-DD.`);
  }
  const [yearStr, monthStr, dayStr] = dateStr.split('-');
  return {
    year: parseInt(yearStr || '0', 10),
    month: parseInt(monthStr || '0', 10),
    day: parseInt(dayStr || '0', 10),
  };
}

/**
 * Computes Indian Financial Year boundaries for a given date.
 * Default in India is April 1 (startMonth = 4).
 */
export function getFinancialYear(
  dateStr: string = getTodayIST(),
  startMonth: number = 4
): {
  fyLabel: string;
  startDate: string;
  endDate: string;
} {
  const { year, month } = parseDateParts(dateStr);

  let startYear = year;
  if (month < startMonth) {
    startYear = year - 1;
  }
  const endYear = startYear + 1;

  const startMonthStr = startMonth.toString().padStart(2, '0');
  const prevMonth = startMonth === 1 ? 12 : startMonth - 1;
  const endMonthStr = prevMonth.toString().padStart(2, '0');

  // Compute end day of prevMonth
  const lastDayOfEndMonth = new Date(endYear, prevMonth, 0).getDate();

  const shortNextYear = (endYear % 100).toString().padStart(2, '0');

  return {
    fyLabel: `FY ${startYear}-${shortNextYear}`,
    startDate: `${startYear}-${startMonthStr}-01`,
    endDate: `${endYear}-${endMonthStr}-${lastDayOfEndMonth.toString().padStart(2, '0')}`,
  };
}

/**
 * Returns the first and last date of the month for a given YYYY-MM string or YYYY-MM-DD.
 */
export function getMonthRange(monthOrDateStr: string): { startDate: string; endDate: string } {
  const parts = monthOrDateStr.split('-');
  const year = parseInt(parts[0] || '0', 10);
  const month = parseInt(parts[1] || '0', 10);

  if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
    throw new Error(`Invalid month input: "${monthOrDateStr}"`);
  }

  const monthStr = month.toString().padStart(2, '0');
  const lastDay = new Date(year, month, 0).getDate();

  return {
    startDate: `${year}-${monthStr}-01`,
    endDate: `${year}-${monthStr}-${lastDay.toString().padStart(2, '0')}`,
  };
}

/**
 * Formats a YYYY-MM-DD date into human readable Indian format (e.g. "22 Nov 2026").
 */
export function formatDisplayDate(dateStr: string): string {
  const { year, month, day } = parseDateParts(dateStr);
  const date = new Date(year, month - 1, day);

  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}
