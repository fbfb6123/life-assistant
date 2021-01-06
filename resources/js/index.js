import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import TodoApp from './components/TodoApp';
import App from './components/App';
import ExpenceStore from './components/Store';

//表示をレンダリング
ReactDOM.render(
  <Provider store={ExpenceStore}>
    <App />
  </Provider>,
  document.getElementById('mycomponent')
)

// const store = createStore();

// ReactDOM.render(
//     <Provider store={store}>
//         <TodoApp />
//     </Provider>,
//     document.getElementById('todoApp')
// );