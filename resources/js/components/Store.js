import { createStore } from 'redux';

const initData = {
  data:[],
  message:'please type message:',
  mode:'default',
  fdata:[]
};

//レデューサー
export function homeReducer(state = initData, action) {
  switch (action.type) {
    case 'ADD':
      return addReduce(state, action);

    case 'DELETE':
      return deleteReduce(state, action);

    case 'FIND':
      return findReduce(state, action);
      
    default:
      return state;  
  }
}

//レデュースアクション

//追加のレデュース処理
function addReduce(state, action) {
  let d = new Date();
  let f = d.getHours() + ':' + d.getMinutes() + ':' +d.getSeconds();
  let data = {
    message:action.message,
    created:f
  };
  let newdata = state.data.slice();
  newdata.unshift(data);
  return {
    data:newdata,
    message:'追加しました',
    mode:'default',
    fdata:[]
  };
}

//検索のレデュース処理
function findReduce(state, action) {
  let f = action.find;
  let fdata = [];
  state.data.forEach((value) =>{
    if (value.message.indexOf(f) >= 0){
      fdata.push(value);
    }
  });
  return {
    data:state.data,
    message:'find "' + f + '":',
    mode:'find',
    fdata:fdata
  };
}

//削除のレデュース処理
function deleteReduce(state, action) {
  let newdata = state.data.slice();
  newdata.splice(action.index, 1);
  return {
    data:newdata,
    message:'delete"' + action.index + '":',
    mode:'delete',
    fdata:[]
  }
}

//アクションクリエーター

//追加のアクション
export function addExpense(text) {
  return {
    type: 'ADD',
    message:text
  }
}

//削除のアクション
export function deleteExpense(num) {
  return {
    type:'DELETE',
    index:num
  }
}

//検索のアクション
export function findExpense(text) {
  return {
    type:'FIND',
    find:text
  }
}

//ストアを作成
export default createStore(homeReducer);

