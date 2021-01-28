import React from 'react';
import employeeServices from "./Employee";

  export const IncomeExpense = ({ incomeTotal, expenseTotal, }) => {

  const percentage = () => {
    if (incomeTotal >= 1) {
      return `${Math.round((expenseTotal / incomeTotal) * 100)} %`;
    } else {
      return '---';
    }
  };

  return (
  <div className="inc-exp-container">
      <div className="inc-container">
        <h5>収入</h5>
        <div className="left">
          <p className="income-total">+ {Number(incomeTotal).toLocaleString()}<span> 円</span></p>
      </div>
    </div>
    <div className="exp-container">
      <h5>支出</h5>
      <div className="right">
          <p className="expense-total">- {Number(expenseTotal).toLocaleString()}<span> 円</span></p>
          <div className="totalPercentage">{percentage()}</div>
      </div>
      </div>
  </div>
  );
}
export default IncomeExpense;