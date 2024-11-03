const {
  transactions,
  filterIncomeTransactions,
  filterExpenseTransactions,
  calculateTotalIncome,
  calculateTotalExpenses,
  calculateNetTotal,
  filterSignificantTransactions,
} = require("./iterationMethods.js");

describe("Financial Transaction Analysis", () => {
  describe("Transaction Analysis", () => {
    it("should filter only income transactions", () => {
      expect(filterIncomeTransactions(transactions)).toEqual([
        ["income", 1000],
        ["income", 1500],
        ["income", 700],
      ]);
    });

    it("should filter only expense transactions", () => {
      expect(filterExpenseTransactions(transactions)).toEqual([
        ["expense", 500],
        ["expense", 300],
      ]);
    });
  });

  describe("Financial Summary", () => {
    it("should calculate the total income", () => {
      expect(calculateTotalIncome(transactions)).toBe(3200);
    });

    it("should calculate the total expenses", () => {
      expect(calculateTotalExpenses(transactions)).toBe(800);
    });
  });

  describe("Net Analysis", () => {
    it("should calculate the net total", () => {
      expect(calculateNetTotal(transactions)).toBe(2400);
    });

    it("should filter transactions above or equal to $500", () => {
      expect(filterSignificantTransactions(transactions)).toEqual([
        ["income", 1000],
        ["income", 1500],
        ["expense", 500],
        ["income", 700],
      ]);
    });
  });
});
