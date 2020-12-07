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

  doChange(event) {
    let n = event.target.value;
    this.setState((state)=>({
      num: n,
      msg: 'count: ' +n,
    }));
  }

  render() {
    return (
      <div className="container">
        <p>{this.state.msg}</p>
        <div>
          <input type="number" id="num"
               onChange={this.doChange} />
        </div>
      </div>
    );
  }
}

if (document.getElementById('mycomponent')) {
  ReactDOM.render(<MyComponent />, document.getElementById('mycomponent'));
}