import React from 'react';
import employeeServices from "./Employee";

export const Expense = ({expenselist, setExpenselist}) => {

  return (
    <section>
      <div className="table">
        <div className="tbody">

        {
          expenselist.map((expense)=>{
            return(
              <div className="income-item" key={expense.id}>
                <div className="income-item-text">{expense.text}</div>
                <div className="income-item-amount">{expense.amount}</div>
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