import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer, { history } from './reducers';

const middleware = [
  ...getDefaultMiddleware(),
  thunk,
  routerMiddleware(history),
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [],
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducers/index', () => {
    const newRootReducer = require('./reducers/index').default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;
export { history };

export type AppDispatch = typeof store.dispatch;
