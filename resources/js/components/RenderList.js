import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/Todo';


class RenderList extends React.Component{

    constructor(){
        super();
        this.deleteTask = this.deleteTask.bind(this);
    }

    deleteTask(todo){
        this.props.deleteTodo(todo);
    }

    render(){

        const todolist = this.props.state.todos.map(todo => {
            return (
                <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td><button className="btn btn-secondary" onClick={() => this.deleteTask(todo)}>完了</button></td>
                </tr>
            );
        });

        return (todolist);
    }
}

const mapStateToProps = state => {
    return {
        state: state.todos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: (todo) => dispatch(actions.deleteTodo(todo)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RenderList);