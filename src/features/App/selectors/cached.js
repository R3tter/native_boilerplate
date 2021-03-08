import { createSelector } from 'reselect';

const cached = ({ Cached }) => Cached;

export const getCachedData = createSelector(cached, data => data);
export const getIsAuth = createSelector(cached, ({ isAuth }) => isAuth);
