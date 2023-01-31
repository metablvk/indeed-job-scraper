import { combineReducers } from 'redux';

import { JobReducer } from './job/job.reducer';

export const rootReducer = combineReducers({
  job: JobReducer,
});
