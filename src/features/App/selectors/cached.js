import { createSelector } from 'reselect';

const cached = ({ Cached }) => Cached;

export const getCachedData = createSelector(cached, data => data);
