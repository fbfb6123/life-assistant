import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider, connect } from 'react-redux';
import createStore from '../createStore';
import * as actions from '../actions/Todo';
import RenderList from './RenderList';


class TodoApp extends Component {

    constructor(){
        super();
        this.inputChange = this.inputChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    inputChange(event){

        switch(event.target.name){
            case 'todo':
                this.props.changeTodo(event.target.value);
                break;
            default:
                break;

        }
    }

    addTodo(){

        if(this.props.state.todo == ''){
            return;
        }

        this.props.addTodo(this.props.state.todo);
        this.props.changeTodo('');
    }


    render() {
        return (
            <React.Fragment>
                {/* form */}
                <div className="form-group mt-4">
                    <label htmlFor="todo">新規Todo</label>
                    <input type="text" className="form-control" id="todo" name="todo" value={this.props.state.todo} onChange={this.inputChange}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.addTodo}>登録</button>
                {/* table */}
                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>タスク</th>
                            <th>完了</th>
                        </tr>
                    </thead>
                    <tbody>
                        <RenderList/>
                    </tbody>
                </table>
            </React.Fragment>
        );
    }

    componentDidMount(){
        this.props.getTodos();
    }
}

const mapStateToProps = state => {
    return {
        state: state.todos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTodos: () => dispatch(actions.getTodos()),
        addTodo: (todo) => dispatch(actions.addTodo(todo)),
        changeTodo: (todo) => dispatch(actions.changeTodo(todo))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoApp);