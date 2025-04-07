import { configureStore } from '@reduxjs/toolkit';
import collapsed from './modules/collapsed';
import user from './modules/user';

const reducers = {
  user,
  collapsed,
};

const store = configureStore({
  reducer: reducers,
});

export default store;
