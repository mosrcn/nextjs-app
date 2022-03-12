import { combineReducers, AnyAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import auth from './auth';

const combineReducer = combineReducers({
  auth,
});

type RootState = ReturnType<typeof combineReducer>;

const reducer = (state: RootState | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default:
      return combineReducer(state, action);
  }
};

export default reducer;
