//収支リストコンポーネント

import React from 'react';
import React, {Component} from 'react';
import { IncomeItem } from './IncomeItem';
import { ExpenseItem } from './ExpenseItem';

class ItemLists extends Component {
  render(){
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
}
export default ItemLists;