import { Action, configureStore, Middleware, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { logger } from 'redux-logger';

import reducer from './reducers';

const middleware: Middleware[] = [];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
  devTools: process.env.NODE_ENV === 'development',
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
