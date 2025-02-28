import { faker } from "@faker-js/faker";

import {
  Transaction,
  calculateNetTotal,
  calculateTotalExpenses,
  calculateTotalIncome,
  filterExpenseTransactions,
  filterIncomeTransactions,
  filterSignificantTransactions,
} from "../transactions";

const transactions: Transaction[] = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

describe("Transactions", () => {
  describe("Transaction Analysis", () => {
    describe("filterIncomeTransactions", () => {
      it("should filter only income transactions", () => {
        expect(filterIncomeTransactions(transactions)).toEqual([
          ["income", 1000],
          ["income", 1500],
          ["income", 700],
        ]);
      });
    });

    describe("filterExpenseTransactions", () => {
      it("should filter only expense transactions", () => {
        expect(filterExpenseTransactions(transactions)).toEqual([
          ["expense", 500],
          ["expense", 300],
        ]);
      });
    });
  });

  describe("Financial Summary", () => {
    describe("calculateTotalIncome", () => {
      it("should calculate the total income", () => {
        expect(calculateTotalIncome(transactions)).toBe(3200);
      });
    });

    describe("calculateTotalExpenses", () => {
      it("should calculate the total expenses", () => {
        expect(calculateTotalExpenses(transactions)).toBe(800);
      });
    });
  });

  describe("Net Analysis", () => {
    describe("calculateNetTotal", () => {
      it("should calculate the net total", () => {
        expect(calculateNetTotal(transactions)).toBe(2400);
      });
    });

    describe("filterSignificantTransactions", () => {
      const threshold = faker.number.int({ min: 500, max: 1000 });

      it(`should filter transactions above or equal to provided threshold of $${threshold}`, () => {
        let expectedTransactions = [];

        for (let transaction of transactions)
          if (transaction[1] > threshold)
            expectedTransactions.push(transaction);

        expect(filterSignificantTransactions(transactions, threshold)).toEqual(
          expectedTransactions
        );
      });
    });
  });
});
