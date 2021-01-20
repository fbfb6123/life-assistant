import React from 'react';
import Income from './Income';
import Expense from './Expense';

export const List = ({ listEmployee, setListEmployee }) => {

  return (
    <div className="list-container">
      <div className="income-list">
        <h3>収入一覧</h3>
          <ul className="list">
              <Income
                listEmployee={listEmployee}
                setListEmployee={setListEmployee}
             
              />
          </ul>
      </div>
      <div className="expense-list">
        <h3>支出一覧</h3>
        <ul className="list">
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