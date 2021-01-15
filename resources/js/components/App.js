import React, { Component } from 'react';
// import MyComponent from './MyComponent';
import AddForm from '../expense/AddForm'
import Test from './Test';
import DelForm from '../expense/DelForm'
import FindForm from '../expense/FindForm'
import Counter from '../expense/Counter';
// import Stb from './Stb';
import Header from './Header';
import Balance from './Balance';
import IncomeExpense from './IncomeExpense';

import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

  //Appコンポーネント
class App extends Component {
  td = {
    width:"250px"
  }

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <div className="top">
        <Header />
        <Balance />
        <IncomeExpense />
        </div>

        <h1>家計簿</h1>
        <AddForm />
        <Test />
        <hr />
        <table><tbody><tr>
          <td style ={this.td}><FindForm /></td>
          <td style ={this.td}><DelForm /></td>
        </tr></tbody></table>
          {/* <Stb /> */}
        <Counter />
        {/* <MyComponent /> */}
      </div>
    );
  }
}
// ReactDOM.render (
//   <App />,
//   document.getElementById('mycomponent')
// )
export default App;
