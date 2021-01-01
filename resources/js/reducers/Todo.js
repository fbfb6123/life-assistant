const initialState = {
  todos: [],
  todo: ''
}

export const todoReducer = (state = initialState, action) => {
  // console.log(action.todos);
  switch (action.type){
      case 'GET_TODOS':
          const getState = Object.assign({}, state);
          getState.todos = action.todos;
          return getState;
      case 'ADD_TODO':
          const addState = Object.assign({}, state); 
          addState.todos = action.todos;
          return addState;
      case 'DELETE_TODO':
          const delState = Object.assign({}, state);
          delState.todos = action.todos;
          return delState;
      case 'CHANGE_TODO':
          const changeState = Object.assign({}, state);
          changeState.todo = action.todo
          return changeState;
      default:
          return state;
  }
}