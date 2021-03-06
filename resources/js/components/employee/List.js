import React from 'react';
import Income from './Income';
import Expense from './Expense';

export const List = ({incomelist, setIncomelist, expenselist, setExpenselist, selectedMonth, thisMonth, incomeDeleteEmployee, deleteEmployee}) => {

  return (
    <div className="list-container">
      <div className="income-list">
          <ul className="income-list-item">
            <div className="thead-dark">
                  収入一覧
            </div>
         
              <Income
              incomeDeleteEmployee={incomeDeleteEmployee}
              incomelist={incomelist}
              setIncomelist={setIncomelist}
              selectedMonth={selectedMonth}
              thisMonth={thisMonth}
              />
              
          </ul>
      </div>
      <div className="expense-list">
        <ul className="expense-list-item">
          <div className="thead-dark">
             支出一覧
          </div>
              <Expense
              deleteEmployee={deleteEmployee}
              expenselist={expenselist}
              setExpenselist={setExpenselist}
              selectedMonth={selectedMonth}
              thisMonth={thisMonth}       
              />
          </ul>
      </div>
    </div>
  )
}

export default List;