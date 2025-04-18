import { configureStore } from '@reduxjs/toolkit';
import app from './modules/app';
import user from './modules/user';

const reducers = {
  user,
  app,
};

const store = configureStore({
  reducer: reducers,
});

export default store;
