import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num:0,
      msg:'OK',
    };
    this.doChange = this.doChange.bind(this);
  }

  
}