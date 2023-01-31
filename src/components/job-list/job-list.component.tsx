import { FC } from 'react';
import Job from '../job/job.component';
import { selectCurrentJob } from 'store/job/job.selector';
import { useSelector } from 'react-redux';
import styles from './job-list.module.css';

type Job = {
  companyLocation: string;
  companyName: string;
  companyRating: string;
  jobLink: string;
  jobSalary: string;
  jobSnippet: string;
  jobTitle: string;
  postDate: string;
};

type Props = {
  jobs: Job[];
};

const JobList: FC = () => {
  const jobs = useSelector(selectCurrentJob);
  return (
    <>
      {jobs ? (
        jobs.map((job: Job, id: number) => {
          return (
            <Job
              companyLocation={job.companyLocation}
              companyName={job.companyName}
              companyRating={job.companyRating}
              jobLink={job.jobLink}
              jobSalary={job.jobSalary}
              jobSnippet={job.jobSnippet}
              jobTitle={job.jobTitle}
              postDate={job.postDate}
              key={id}
            />
          );
        })
      ) : (
        <div className={styles.no_jobs}>
          <p>No Jobs found. Try searching...</p>
        </div>
      )}
    </>
  );
};

export default JobList;
