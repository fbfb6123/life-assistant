import React from 'react';
import employeeServices from "./Employee";

export const Expense = ({expenselist, setExpenselist, selectedMonth, thisMonth}) => {

  return (
    <section>
      <div className="table">
        <div className="tbody">

        {
          expenselist.map((expense)=>{
            return(
              <div className="income-item" key={expense.id}>
                <div className="income-item-text">{expense.text}</div>
                <div className="expense-item-amount">-{Number(expense.amount).toLocaleString()}円</div>
              </div>
            )
          })
        }
        
        </div>
      </div>
    </section>
  )
}

export default Expense;