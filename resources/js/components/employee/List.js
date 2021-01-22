import React from 'react';
import Income from './Income';
import Expense from './Expense';

export const List = ({ text, setText, amount, setAmount, incomelist, setIncomelist, expenselist, setExpenselist,fetchDataEmployee }) => {

  return (
    <div className="list-container">
      <div className="income-list">
          <ul className="income-list-item">
            <div className="thead-dark">
                  収入一覧
            </div>
         
              <Income
              incomelist={incomelist}
              setIncomelist={setIncomelist}
              />
              
          </ul>
      </div>
      <div className="expense-list">
        <ul className="expense-list-item">
          <div className="thead-dark">
             支出一覧
          </div>
              <Expense
              expenselist={expenselist}
              setExpenselist={setExpenselist}       
              />
          </ul>
      </div>
    </div>
  )
}

export default List;