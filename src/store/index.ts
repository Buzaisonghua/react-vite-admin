import { combineReducers, createStore } from 'redux';
import user from './modules/user';

const reducers = ({
  user,
});

const store = createStore(combineReducers(reducers));

export default store;
