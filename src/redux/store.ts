import { configureStore } from '@reduxjs/toolkit';

import reducer from './reducer/index';

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
