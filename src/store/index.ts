import { configureStore } from '@reduxjs/toolkit';
import user from './modules/user';

const reducers = {
  user,
};

const store = configureStore({
  reducer: reducers,
});

export default store;
