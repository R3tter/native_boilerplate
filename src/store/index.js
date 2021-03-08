import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Cached, initialState } from 'App/reducers/cached';
import { save } from 'App/actions/cached';
import { asyncKey } from 'constants';

const mergedReducers = {
  Cached
};

const appReducer = combineReducers(mergedReducers);

const cachedMiddleware = store => next => async action => {
  switch (action.type) {
    case save().type: {
      next(action);
      const { Cached } = store.getState() ?? {};
      await AsyncStorage.removeItem(asyncKey);
      AsyncStorage.setItem(asyncKey, JSON.stringify(Cached));
      break;
    }
    default:
      next(action);
  }
};

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = action.payload;
    AsyncStorage.setItem(asyncKey, JSON.stringify(initialState));
  }
  return appReducer(state, action);
};
const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk, cachedMiddleware)));

export default store;
