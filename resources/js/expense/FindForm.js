//取得処理（検索）
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findExpense } from '../components/Store';

class FindForm extends Component {
}
export default connect((state)=>state)(FindForm);