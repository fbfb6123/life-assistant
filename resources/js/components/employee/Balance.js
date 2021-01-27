import React from 'react';
import employeeServices from "./Employee";

  export const Balance = ({ incomeTotal, expenseTotal}) => {

    const balance = incomeTotal - expenseTotal

  return (
    <div className="balancecontainer">
      <div className="balancelist">
        <div className="balance">{Number(balance).toLocaleString()}<span > 円</span></div>
      </div>
    </div>
  );
}
export default Balance;