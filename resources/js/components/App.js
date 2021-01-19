import React, { Component } from 'react';
import Main from './employee/Main';


import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

  //Appコンポーネント
class App extends Component {
  td = {
    width:"250px"
  }

  render(){
    return (
      <div>
        {/* <div className="top">
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
        </tr></tbody></table> */}
        
          {/* <Stb /> */}
        {/* <Counter /> */}
        {/* <MyComponent /> */}
        <Main />
      </div>
    );
  }
}
// ReactDOM.render (
//   <App />,
//   document.getElementById('mycomponent')
// )
export default App;
