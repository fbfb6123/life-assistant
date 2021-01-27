import React from 'react';
import employeeServices from "./Employee";

  export const Balance = ({ text, setText, amount, setAmount, incomelist, setIncomelist, expenselist, setExpenselist,fetchDataEmployee }) => {


  return (
    <div className="balancecontainer">
      <div className="balancelist">
        <h1>残高</h1>   
      </div>
    </div>
  );
}
export default Balance;