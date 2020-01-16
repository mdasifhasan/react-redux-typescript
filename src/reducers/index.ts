import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import * as Counter from './CounterStore';
import { createBrowserHistory } from 'history';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  counter: Counter.default,
  router: connectRouter(history),
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
