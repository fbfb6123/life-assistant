import React, { Component } from 'react';
import MyComponent from './MyComponent';
import AddForm from './expense/AddForm'
import DelForm from './expense/DelForm'
import FindForm from './expense/FindForm'

  //Appコンポーネント
  class App extends Component {

  render(){
    return (
      <div>
        <h1>家計簿</h1>
        <AddForm />
        <hr />
        <table><tbody><tr>
          <td style ={this.td}><FindForm /></td>
          <td style ={this.td}><DelForm /></td>
        </tr></tbody></table>
        <MyComponent />
      </div>
    );
  }
}
export default App;