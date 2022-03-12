import { createAction } from '@reduxjs/toolkit';

import { IUser } from '../reducers/auth';

export const setUser = createAction<IUser | null>('auth/setUser');
