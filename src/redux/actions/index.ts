import { Dispatch } from 'redux';
import { ActionTypes } from './names';

export function increment() {
  return function (dispatch: Dispatch<{ type: ActionTypes.INCREMENT }>) {
    return dispatch({ type: ActionTypes.INCREMENT });
  };
}

export function decrement() {
  return function (dispatch: Dispatch<{ type: ActionTypes.DECREMENT }>) {
    return dispatch({ type: ActionTypes.DECREMENT });
  };
}

export function reset() {
  return function (dispatch: Dispatch<{ type: ActionTypes.RESET }>) {
    return dispatch({ type: ActionTypes.RESET });
  };
}
