import { describe, it, expect } from 'vitest';
import { getTodayIST, getFinancialYear, getMonthRange, formatDisplayDate, parseDateParts } from './dates';

describe('SAMRIDD Dates Utility (lib/dates.ts)', () => {
  it('returns valid YYYY-MM-DD string for getTodayIST', () => {
    const today = getTodayIST();
    expect(today).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('correctly calculates Indian Financial Year boundaries (April 1 to March 31)', () => {
    // Nov 2026 -> FY 2026-27
    const fyNov = getFinancialYear('2026-11-22', 4);
    expect(fyNov.fyLabel).toBe('FY 2026-27');
    expect(fyNov.startDate).toBe('2026-04-01');
    expect(fyNov.endDate).toBe('2027-03-31');

    // Feb 2027 -> Still FY 2026-27
    const fyFeb = getFinancialYear('2027-02-15', 4);
    expect(fyFeb.fyLabel).toBe('FY 2026-27');
    expect(fyFeb.startDate).toBe('2026-04-01');
    expect(fyFeb.endDate).toBe('2027-03-31');

    // April 1 2027 -> FY 2027-28
    const fyApr = getFinancialYear('2027-04-01', 4);
    expect(fyApr.fyLabel).toBe('FY 2027-28');
    expect(fyApr.startDate).toBe('2027-04-01');
    expect(fyApr.endDate).toBe('2028-03-31');
  });

  it('calculates full month ranges accurately (including leap years)', () => {
    const febLeap = getMonthRange('2028-02');
    expect(febLeap.startDate).toBe('2028-02-01');
    expect(febLeap.endDate).toBe('2028-02-29');

    const febNonLeap = getMonthRange('2027-02');
    expect(febNonLeap.endDate).toBe('2027-02-28');
  });

  it('formats display date using Indian locale format', () => {
    const display = formatDisplayDate('2026-11-22');
    expect(display).toMatch(/22.*Nov.*2026/);
  });

  it('throws for invalid date formats', () => {
    expect(() => parseDateParts('22-11-2026')).toThrow();
    expect(() => parseDateParts('invalid')).toThrow();
  });
});
