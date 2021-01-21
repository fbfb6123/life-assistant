import React from 'react';
import employeeServices from "./Employee";

export const Expense = ({listEmployee, setListEmployee}) => {

  return (
    <section>
      <div className="table">
        <div className="tbody">

        {
          listEmployee.map((income)=>{
            return(
              <div className="income-item" key={income.id}>
                <div className="income-item-text">{income.text}</div>
                <div className="income-item-amount">{income.amount}</div>
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