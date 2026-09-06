/**
 * Format a numeric amount into Indian Rupee currency format (e.g. 69999 -> ₹69,999)
 * @param {number} amount
 * @returns {string} Formatted currency string
 */
export function formatCurrency(amount) {
  if (typeof amount !== 'number') return `₹${amount || 0}`;
  return '₹' + amount.toLocaleString('en-IN');
}
