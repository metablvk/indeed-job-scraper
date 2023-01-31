import { JOB_ACTION_TYPES } from './job.types';
import { createAction } from 'utils/reducer.utils';

export const setCurrentJob = (job: any) =>
  createAction(JOB_ACTION_TYPES.SET_CURRENT_JOB, job);
