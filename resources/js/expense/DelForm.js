//削除処理
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteExpense } from '../components/Store';

class DelForm extends Component {
  input = {
    fontSize:"12pt",
    color:"#006",
    padding:"1px",
    margin:"5px 0px"
  }
  btn = {
    fontSize:"10pt",
    color:"#006",
    padding:"2px 10px"
  }

  constructor(props) {
    super(props);
    this.state = {
      number:0
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }
}
export default connect((state)=>state)(DelForm);