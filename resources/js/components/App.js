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
        <Main />
      </div>
    );
  }
}

export default App;
