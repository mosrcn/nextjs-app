import { createReducer } from '@reduxjs/toolkit';

import { setUser } from '../actions/auth';

export interface IUserProfile {
  name: string;
}

export interface IAuth {
  user: IUserProfile | null;
}

const initialState: IAuth = {
  user: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setUser, (state, action) => {
    state.user = action.payload;
  });
});

export default reducer;
