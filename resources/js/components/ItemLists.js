//収支リストコンポーネント

import React from 'react';
import { IncomeItem } from './IncomeItem';
import { ExpenseItem } from './ExpenseItem';


export const ItemsList = ({ deleteIncome, deleteExpense, incomeItems, expenseItems, incomeTotal, selectedMonth, thisMonth}) => {

  return (
    <div className="list-container">
      <div className="income-list">
        <h3>収入一覧</h3>
          <ul className="list">
              <IncomeItem 
              />
           
          </ul>
      </div>
      <div className="expense-list">
        <h3>支出一覧</h3>
        <ul className="list">
              <ExpenseItem
                
              />
          </ul>
      </div>
    </div>
  )
}