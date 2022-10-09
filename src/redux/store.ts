import { configureStore } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';
import reducer from './reducer/index';

const store = configureStore({
  reducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
