//削除処理
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { delExpense } from '../components/Store';

class DelForm extends Component {
}
export default connect((state)=>state)(DelForm);