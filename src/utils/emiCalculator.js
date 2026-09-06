/**
 * Calculate Monthly EMI for a given principal, tenure, and annual interest rate.
 * Pure, standalone function isolated from UI components.
 *
 * @param {number} principal - Total loan amount
 * @param {number} months - Loan tenure in months
 * @param {number} annualInterestRate - Annual interest rate in percent (default: 0 for No-Cost EMI)
 * @returns {number} Monthly EMI amount rounded to nearest integer
 */
export function calculateEMI(principal, months, annualInterestRate = 0) {
  if (annualInterestRate === 0) return Math.round(principal / months);
  const r = annualInterestRate / 12 / 100;
  return Math.round((principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1));
}
