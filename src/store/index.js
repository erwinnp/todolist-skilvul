import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todos from './features/todoSlice';

const rootReducer = combineReducers({
  todos,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
