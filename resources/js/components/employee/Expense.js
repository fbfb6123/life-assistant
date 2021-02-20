import React from 'react';

export const Expense = ({expenselist, setExpenselist, selectedMonth, thisMonth, deleteEmployee}) => {

  return (
    <section>
      <div className="table">
        <div className="tbody">

        {
          expenselist.map((expense)=>{
            return(
              <div className="income-item" key={expense.id}>
                <div className="income-item-text">{expense.text}</div>
                <div className="expense-item-amount">-{Number(expense.amount).toLocaleString()}円
                <button className="delete-btn" onClick={()=>deleteEmployee(expense.id)}>×</button></div>
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