import { apiRequestRedux } from 'api-req-redux';

import store from 'store';

export const apiRequest = apiRequestRedux({
  store: () => store
});
