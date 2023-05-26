import { legacy_createStore, combineReducers } from 'redux';
import todoReducer from './reducers/todoReducers';

const rootReducers = combineReducers({
  todoReducer,
});

const store = legacy_createStore(rootReducers);

export default store;
