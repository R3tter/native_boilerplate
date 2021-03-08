import { createAction } from 'redux-actions';
// save to AsyncStorage
export const save = createAction('cached/save');
// update store from AsyncStorage
export const update = createAction('cached/update');
