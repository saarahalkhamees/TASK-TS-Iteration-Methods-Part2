const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

// 1) Write a `filterIncomeTransactions` function that returns a new array containing only the income transactions.
function filterIncomeTransactions(transactions) {
  // write your code here...
}

// 2) Write a `filterExpenseTransactions` function that return a new array containing only the expense transactions.
function filterExpenseTransactions(transactions) {
  // write your code here...
}

// 3) Write a `calculateTotalIncome` function that calculates the total income and returns it.
function calculateTotalIncome(transactions) {
  // write your code here...
}

// 4) Write a `calculateTotalExpenses` function that calculates the total expense and returns it.
function calculateTotalExpenses(transactions) {
  // write your code here...
}

// 5) Write a `calculateNetTotal` function that calculates the net total (total income - total expenses) and returns it.
function calculateNetTotal(transactions) {
  // write your code here...
}

// 6) Write a `filterSignificantTransactions` function that identifies and creates a new array with transactions (both incomes and expenses) above or equal to $500.
function filterSignificantTransactions(transactions, threshold = 500) {
  // write your code here...
}

module.exports = {
  filterIncomeTransactions,
  filterExpenseTransactions,
  calculateTotalIncome,
  calculateTotalExpenses,
  calculateNetTotal,
  filterSignificantTransactions,
};
