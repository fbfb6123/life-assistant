import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
// import TodoApp from './components/TodoApp';
import App from './components/App';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';//storageに保存
import { PersistGate } from 'redux-persist/integration/react';
import ExpenceStore, { homeReducer} from './components/Store';

// Redux Persistの設定
const persistConfig = {
  key: 'expence',
  storage,
};

//パーシスとレデューサーの作成
const persistedReducer = persistReducer(persistConfig, homeReducer);

//ストア、パーシスターの作成
let store = createStore(persistedReducer);
let pstore = persistStore(store);

//表示をレンダリング
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<p>loading...</p>}
                 persistor={pstore}>
           <App />
    </PersistGate>
  </Provider>,
  document.getElementById('mycomponent')
)

export default pstore;

// const store = createStore();

// ReactDOM.render(
//     <Provider store={store}>
//         <TodoApp />
//     </Provider>,
//     document.getElementById('todoApp')
// );