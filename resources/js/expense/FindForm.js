//取得処理（検索）
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findExpense } from '../components/Store';

class FindForm extends Component {
  input = {
    fontSize:"14pt",
    color:"#006",
    padding:"0px",
  }
  btn = {
    fontSize:"12pt",
    color:"#006",
    padding:"1px 10px"
  }

  constructor(props) {
    super(props);
    this.state = {
      find:''
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChange(e) {
    this.setState({
      find: e.target.value
    });
  }

  doAction(e) {
    e.preventDefault();
    let action = findExpense(this.state.number);
    this.props.dispatch(action); //Storeのレデューサーにactionが送られる
  }
}
export default connect((state)=>state)(FindForm);