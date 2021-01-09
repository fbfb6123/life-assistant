import React, { Component } from 'react';
import MyComponent from './MyComponent';
import AddForm from '../expense/AddForm'
import DelForm from '../expense/DelForm'
// import FindForm from '../expense/FindForm'
import Counter from '../expense/Counter';

  //Appコンポーネント
class App extends Component {

  render(){
    return (
      <div>
        <h1>家計簿</h1>
        <AddForm />
        <hr />
        <table><tbody><tr>
          {/* <td style ={this.td}><FindForm /></td> */}
          <td style ={this.td}><DelForm /></td>
          <td><Counter /></td>
        </tr></tbody></table>
        <MyComponent />
      </div>
    );
  }
}
// ReactDOM.render (
//   <App />,
//   document.getElementById('mycomponent')
// )
export default App;