import React from 'react';
import ReactDOM from 'react-dom';

import { Provider, connect } from 'react-redux';
import createStore from './createStore';
import TodoApp from './components/TodoApp';


const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('todoApp')
);