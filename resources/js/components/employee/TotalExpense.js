import React from 'react'

export const totalExpenseCalc = (incomelist) => {
  const expenseAmounts = expenselist.map(expenselist => expenselist.amount);
  return expenseAmounts.reduce((acc, cur) => acc += cur, 0);
};

export default totalExpenseCalc;