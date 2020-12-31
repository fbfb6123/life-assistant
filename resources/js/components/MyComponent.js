import Axios from 'axios';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num:0,
      msg:'てすと',
    };
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChange(event) {
    let n = event.target.value;
    this.setState((state)=>({
      num: n,
      person:null,
    }));
  }

  doAction(event) {
    this.setState((state)=>({
      msg:'wait...',
    }));
    Axios.get('/hello/json/' + this.state.num)
         .then(response =>{
           let person = response.data;
           let msg = person.id + ':' + person.name
           + '[' + person.email + '] ('
           + person.age + ')';
           this.setState((state)=>({
             person:person,
             msg:msg
           }));
         });
  }

  render() {
    return (
      <div className="container">
        <p>{this.state.msg}</p>
        <div>
          <input type="number" id="num"
               onChange={this.doChange} />
          <button onClick={this.doAction}>Click</button>     
        </div>
      </div>
    );
  }
}

if (document.getElementById('mycomponent')) {
  ReactDOM.render(<MyComponent />, document.getElementById('mycomponent'));
}