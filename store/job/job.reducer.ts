import { JOB_ACTION_TYPES } from './job.types';
import { AnyAction } from 'redux';

const INITIAL_STATE = {
  currentJob: null,
};

export const JobReducer = (state = INITIAL_STATE, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case JOB_ACTION_TYPES.SET_CURRENT_JOB:
      return { ...state, currentJob: payload };
    default:
      return state;
  }
};
