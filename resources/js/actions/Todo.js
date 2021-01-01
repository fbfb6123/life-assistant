import axios from 'axios';

export const addTodo = (todo) => async dispatch => {

    const response = await axios.post('/api/add',{title: todo});

    dispatch({
        type: 'ADD_TODO',
        todos: response.data
    });
}

export const getTodos = () => async dispatch => {

    const response = await axios.get('/api/get');

    dispatch({
        type: 'GET_TODOS',
        todos: response.data
    });
}

export const deleteTodo = (todo) => async dispatch => {

    const response = await axios.post('/api/del',{id: todo.id});

    dispatch({
        type: 'DELETE_TODO',
        todos: response.data
    });

}

//onChange用
export const changeTodo = (todo) => {
    return {
        type: 'CHANGE_TODO',
        todo: todo
    }
}