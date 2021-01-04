import { crrateStore } from 'redux';

const initData = {
  data:[{message:'Store.jsのコンポーネント', created:new Date()}],
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
  let data = {
    message:action.message,
    created:new Date()
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

