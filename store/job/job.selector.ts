import { RootState } from 'store/store';
export const selectCurrentJob = (state: RootState) => state.job.currentJob;
