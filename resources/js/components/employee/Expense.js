import React from 'react';
import employeeServices from "./Employee";

export const Expense = ({listEmployee, setListEmployee}) => {

  return (
    <section>
      <div className="table">
        <div className="thead-dark">
          <div className="thead-dark-item">
            <div className="thead-dark-text">Name</div>
            <div className="thead-dark-amount"></div>
          </div>
        </div>
        <div className="tbody">

        {
          listEmployee.map((income)=>{
            return(
              <ul key={income.id}>
                <li>{income.text}</li>
                <li>{income.amount}</li>
              </ul>
            )
          })
        }
        
        </div>
      </div>
    </section>
  )
}

export default Expense;