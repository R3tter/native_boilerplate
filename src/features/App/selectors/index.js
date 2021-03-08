import { createSelector } from 'reselect';

const app = ({ App }) => App;

export const getApp = createSelector(app, data => data);
