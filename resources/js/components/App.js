import React, { Component } from 'react';
import MyComponent from './MyComponent';

  //Appコンポーネント
  class App extends Component {

  render(){
    return (
      <div>
        <h1>Fire</h1>
        <h2>Sample data.</h2>
        <MyComponent />
      </div>
    );
  }
}
export default App;