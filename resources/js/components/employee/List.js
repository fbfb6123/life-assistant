import React from 'react';
import Income from './Income';
import Expense from './Expense';

export const List = ({ text, setText, amount, setAmount, listEmployee, setListEmployee, fetchDataEmployee }) => {

  return (
    <div className="list-container">
      <div className="income-list">
        
          <ul className="income-list-item">
            <div className="thead-dark">
                  収入一覧
            </div>
         
              <Income
              listEmployee={listEmployee}
              setListEmployee={setListEmployee}
              />
              
          </ul>
      </div>
      <div className="expense-list">
        支出一覧
        <ul className="expense-list-item">
              <Expense
              listEmployee={listEmployee}
              setListEmployee={setListEmployee}
                
              />
          </ul>
      </div>
    </div>
  )
}

export default List;