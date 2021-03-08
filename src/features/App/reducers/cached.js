import { handleActions } from 'redux-actions';

import { save, update } from 'App/actions/cached';

export const initialState = {
  id: '',
  token: '',
  isAuth: false
};

export const Cached = handleActions(
  {
    [save]: (state, { payload }) => ({
      ...state,
      ...payload
    }),
    [update]: (state, { payload }) => ({
      ...state,
      ...payload
    })
  },
  initialState
);
