import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './product';

const reducer = combineReducers({
  product: productReducer,
});

export default reducer;
