import React from 'react';
import employeeServices from "./Employee";

  export const Balance = ({ incomeTotal, expenseTotal}) => {

    const balance = incomeTotal - expenseTotal

  return (
    <div className="balancecontainer">
      <div className="balance-list">残高
        <div className="balance-item">{Number(balance).toLocaleString()}<span > 円</span></div>
      </div>
    </div>
  );
}
export default Balance;