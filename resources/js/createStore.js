import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import { todoReducer } from "./reducers/Todo";
import thunk from 'redux-thunk';

export default function createStore() {
    const store = reduxCreateStore(
        combineReducers({
            todos: todoReducer,
        }),
        applyMiddleware(
            thunk,
        )
    );

    return store;
}