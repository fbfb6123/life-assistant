import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import MyComponent from './components/MyComponent';
import createStore from './createStore';
// import TodoApp from './components/TodoApp';
import App from './components/App';

//表示をレンダリング
ReactDOM.render(
  <App />,
  document.getElementById('mycomponent')
)

const store = createStore();

// ReactDOM.render(
//     <Provider store={store}>
//         <TodoApp />
//     </Provider>,
//     document.getElementById('todoApp')
// );