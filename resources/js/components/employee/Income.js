import React from 'react';
import employeeServices from "./Employee";

export const Income = ({incomelist, setIncomelist, selectedMonth, thisMonth}) => {

  const showThisMonth = () => {
  return (
    <section>
      <div className="table">
        <div className="tbody">
        {
          incomelist.map((income)=>{
            return(
              <div className="income-item" key={income.id}>
                <div className="income-item-text">{income.text}</div>
                <div className="income-item-amount">{Number(income.amount).toLocaleString()}円</div>
              </div>
            )
          })
        }
        </div>
      </div>
    </section>
  )
}

const showPastMonth = () => {
  return (
    <section>
      <div className="table">
        <div className="tbody">
        {
          incomelist.map((income)=>{
            return(
              <div className="income-item" key={income.id}>
                <div className="income-item-text">{income.text}</div>
                <div className="income-item-amount">{Number(income.amount).toLocaleString()}円</div>
              </div>
            )
          })
        }
        </div>
      </div>
    </section>
  )
}

return (
  <>
    {thisMonth === selectedMonth ? showThisMonth() : showPastMonth()}
  </>
)}

export default Income;