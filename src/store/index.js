import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { App } from 'App/reducers';

const mergedReducers = {
  App
};

const appReducer = combineReducers(mergedReducers);

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = action.payload;
  }
  return appReducer(state, action);
};
const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

export default store;
