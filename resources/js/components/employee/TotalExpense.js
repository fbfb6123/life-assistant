import React from 'react'

export const totalExpenseCalc = (expenselist) => {
  const expenseAmounts = expenselist.map(expenselist => expenselist.amount);
  return expenseAmounts.reduce((acc, cur) => acc += cur, 0);
};

export default totalExpenseCalc;