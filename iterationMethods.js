const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

// 1) Using `filterIncomeTransactions` function return a new array containing only the income transactions.
function filterIncomeTransactions(transactions) {
  // write your code here...
}

// 2) Using `filterExpenseTransactions` function return a new array containing only the expense  transactions.
function filterExpenseTransactions(transactions) {
  // write your code here...
}

// 3) Using `calculateTotalIncome` Calculate the total income and return it.
function calculateTotalIncome(transactions) {
  // write your code here...
}

// 4) Using `calculateTotalExpenses` Calculate the total expense and return it.
function calculateTotalExpenses(transactions) {
  // write your code here...
}

// 5) Using `calculateNetTotal` Calculate the net total (total income - total expenses) and return it.
function calculateNetTotal(transactions) {
  // write your code here...
}

// 6) Using `filterSignificantTransactions` function Identify and create a new array with transactions (both incomes and expenses) above or equal to $500.
function filterSignificantTransactions(transactions, threshold = 500) {
  // write your code here...
}

module.exports = {
  transactions,
  filterIncomeTransactions,
  filterExpenseTransactions,
  calculateTotalIncome,
  calculateTotalExpenses,
  calculateNetTotal,
  filterSignificantTransactions,
};
