import { FC, ReactNode } from 'react';
import Link from 'next/link';

import styles from './job.module.css';

type Props = {
  companyLocation: string;
  companyName: string;
  companyRating: string;
  jobLink: string;
  jobSalary: string;
  jobSnippet: string;
  jobTitle: string;
  postDate: string;
};

const Job: FC<Props> = ({
  companyLocation,
  companyName,
  companyRating,
  jobLink,
  jobSalary,
  jobSnippet,
  jobTitle,
  postDate,
}) => {
  /**
   * Functional component that builds a job with passed in props, and
   * returns the appropriate mark up to the user.
   */
  return (
    <div className={`${styles.job}`}>
      <small className={`${styles.job_title}`}>{jobTitle}</small>
      <div className={`${styles.company_info}`}>
        <p>{companyName}</p>
        <p>{companyLocation}</p>
      </div>
      <div className={`${styles.job_info}`}>
        <p>{jobSalary ? jobSalary : 'not posted'}</p>
        <p>{postDate}</p>
        <p className='mb_12'>{jobSnippet}</p>
      </div>

      <p className='text-right'>
        <Link className={`${styles.view_job}`} href={jobLink} target='_blank'>
          view
        </Link>
      </p>
    </div>
  );
};

export default Job;
