import React from 'react'

export const totalIncomeCalc = (incomelist) => {
  const incomeAmounts = incomelist.map(incomelist => incomelist.amount);
  return incomeAmounts.reduce((acc, cur) => acc += cur, 0);
};

export default totalIncomeCalc;