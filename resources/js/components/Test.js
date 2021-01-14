import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../components/Store';



class Test extends Component {
  input = {
    fontSize:"16pt",
    color:"#006",
    padding:"1px",
    margin:"5px 0px"
  }
  btn = {
    fontSize:"14pt",
    color:"#006",
    padding:"2px 10px"
  }

  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      age:''
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  doAction(e) {
    e.preventDefault();
    axios
            .post('api/budget/postTodos')
            .then((res) => {
                //todosを更新（描画がかかる）
                this.setState({
                    people: res.data
                });
            })
            .catch(error => {
                console.log(error)
            })
  }

  message = {
    fontSize: "16pt",
    color: "#006",
    margin: "5px 10px"
  }
  
  render() {
    return (
      <div>
       <h1>Test.js</h1>
        <p style={this.message}>{this.props.message}</p>
        <form onSubmit={this.doAction}>
          <input type="text" size="40" onChange={this.doChange}
          style={this.input} value={this.state.message} required />
          <input type="submit" style={this.btn} value="Add"/>
        </form>
      </div>
    );
  }
}
// ReactDOM.render (
//   <MyComponent />,
//   document.getElementById('mycomponent')
// )
export default connect((state)=>state)(Test);