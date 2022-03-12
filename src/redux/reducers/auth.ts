import { createReducer } from '@reduxjs/toolkit';

import { setUser } from '../actions/auth';

export interface IUser {
  name: string;
}

export interface IAuth {
  user: IUser | null;
  isAuthenticated: boolean;
}

const initialState: IAuth = {
  user: null,
  isAuthenticated: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setUser, (state, action) => {
    state.user = action.payload;
    state.isAuthenticated = !!action.payload;
  });
});

export default reducer;
