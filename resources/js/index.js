import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import TodoApp from './components/TodoApp';
import App from './components/App';
import { PersistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';//storageに保存
import { PersistGate } from 'redux-persist/integration/react';
import ExpenceStore, { expenceRedecer} from './components/Store';

// Redux Persistの設定
const persistConfig = {
  key: 'memo',
  storage,
};

//パーシスとレデューサーの作成
const persistedReducer = persistReducer(persistConfig, expenceRedecer);



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