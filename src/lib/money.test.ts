import { describe, it, expect } from 'vitest';
import { toPaise, toRupees, addPaise, subPaise, formatINR } from './money';

describe('SAMRIDD Money Utility (lib/money.ts)', () => {
  describe('toPaise', () => {
    it('correctly converts standard rupee strings to integer paise', () => {
      expect(toPaise('1250.50')).toBe(125050);
      expect(toPaise('1250.5')).toBe(125050);
      expect(toPaise('1250')).toBe(125000);
      expect(toPaise('0.05')).toBe(5);
      expect(toPaise('0')).toBe(0);
      expect(toPaise('')).toBe(0);
    });

    it('strips commas and whitespace before parsing', () => {
      expect(toPaise(' 12,34,567.89 ')).toBe(123456789);
      expect(toPaise('1,00,000')).toBe(10000000);
    });

    it('handles negative amounts correctly', () => {
      expect(toPaise('-500.25')).toBe(-50025);
      expect(toPaise('-100')).toBe(-10000);
    });

    it('throws error for invalid formats or floats with > 2 decimal places', () => {
      expect(() => toPaise('12.345')).toThrow();
      expect(() => toPaise('abc')).toThrow();
      expect(() => toPaise('12..34')).toThrow();
    });
  });

  describe('toRupees', () => {
    it('converts integer paise back to 2-decimal rupee strings', () => {
      expect(toRupees(125050)).toBe('1250.50');
      expect(toRupees(125000)).toBe('1250.00');
      expect(toRupees(5)).toBe('0.05');
      expect(toRupees(0)).toBe('0.00');
      expect(toRupees(-50025)).toBe('-500.25');
    });

    it('throws error if input is not an integer', () => {
      expect(() => toRupees(1250.5)).toThrow();
    });
  });

  describe('addPaise & subPaise', () => {
    it('adds multiple paise values without float drift', () => {
      // In normal floats: 0.1 + 0.2 = 0.30000000000000004
      const p1 = toPaise('0.10');
      const p2 = toPaise('0.20');
      const total = addPaise(p1, p2);
      expect(total).toBe(30);
      expect(toRupees(total)).toBe('0.30');
    });

    it('subtracts paise correctly', () => {
      const p1 = toPaise('100.00');
      const p2 = toPaise('35.50');
      expect(subPaise(p1, p2)).toBe(6450);
    });
  });

  describe('formatINR', () => {
    it('formats numbers using Indian grouping (Lakhs and Crores)', () => {
      const formatted = formatINR(123456789);
      // Indian format includes 12,34,567.89
      expect(formatted).toContain('12,34,567.89');
      expect(formatted).toContain('₹');
    });

    it('formats compact representation when requested', () => {
      expect(formatINR(1000000000, { compact: true })).toBe('₹1.00 Cr'); // 1 Crore
      expect(formatINR(50000000, { compact: true })).toBe('₹5.00 L');    // 5 Lakhs
    });
  });
});
