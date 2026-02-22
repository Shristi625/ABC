// Simple currency configuration and helper for conversions
// Use a fixed rate to avoid relying on external APIs during development.

export const USD_TO_NPR = 132.0; // configurable fixed exchange rate (1 USD = 132 NPR)

export function toUSD(amount) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

export function toNPR(amountUsd) {
  const npr = (amountUsd ?? 0) * USD_TO_NPR;
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'NPR', maximumFractionDigits: 0 }).format(npr);
}
