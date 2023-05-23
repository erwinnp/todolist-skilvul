import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
  todoReducer,
  // userReducer,
  // cartReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
