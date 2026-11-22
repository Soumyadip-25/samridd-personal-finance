import { describe, it, expect } from 'vitest';

/**
 * Calculates WCAG 2.2 relative luminance for a given hex color.
 */
function getRelativeLuminance(hex: string): number {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;

  const toLinear = (c: number) =>
    c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);

  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

/**
 * Calculates WCAG contrast ratio between two hex colors.
 */
function getContrastRatio(hex1: string, hex2: string): number {
  const l1 = getRelativeLuminance(hex1);
  const l2 = getRelativeLuminance(hex2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

describe('SAMRIDD Color Token Contrast Verification (§A.5 & FE-1.3.7)', () => {
  const BURGUNDY = '#722F37';
  const MOCHA_CREAM = '#E8DCC6';
  const COSMIC_LATTE = '#B7A89A';
  const WHITE = '#FFFFFF';
  const DARK_BG = '#141110';
  const DARK_PRIMARY = '#D96B77';

  it('verifies White text on Deep Burgundy passes WCAG AAA (>= 7.0)', () => {
    const ratio = getContrastRatio(WHITE, BURGUNDY);
    expect(ratio).toBeGreaterThanOrEqual(7.0);
  });

  it('verifies Deep Burgundy on Mocha Cream passes WCAG AAA for text (>= 7.0)', () => {
    const ratio = getContrastRatio(BURGUNDY, MOCHA_CREAM);
    expect(ratio).toBeGreaterThanOrEqual(7.0);
  });

  it('verifies Deep Burgundy on Cosmic Latte passes WCAG AA for large text and UI components (>= 3.0)', () => {
    const ratio = getContrastRatio(BURGUNDY, COSMIC_LATTE);
    // As documented in architecture.md §A.5: Burgundy on Cosmic Latte is ~4.2:1
    expect(ratio).toBeGreaterThanOrEqual(3.0);
  });

  it('verifies Mocha Cream on Dark Background passes WCAG AAA for dark mode text (>= 7.0)', () => {
    const ratio = getContrastRatio(MOCHA_CREAM, DARK_BG);
    expect(ratio).toBeGreaterThanOrEqual(7.0);
  });

  it('verifies Lightened Burgundy on Dark Background passes WCAG AA (>= 4.5)', () => {
    const ratio = getContrastRatio(DARK_PRIMARY, DARK_BG);
    expect(ratio).toBeGreaterThanOrEqual(4.5);
  });
});
