import { handleActions } from 'redux-actions';
import { setData } from 'App/actions';

const initialState = {
  token: '',
  refreshToken: '',
  isAuth: false,
  language: 'en'
};

export const App = handleActions(
  {
    [setData]: (state, { payload }) => ({
      ...state,
      ...payload
    })
  },
  initialState
);
