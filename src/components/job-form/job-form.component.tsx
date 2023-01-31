import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './job-form.module.css';
import axios from 'axios';
import { setCurrentJob } from 'store/job/job.action';
import { useDispatch } from 'react-redux';

type FormFields = {
  query: string;
  location: string;
  level: string;
};

const defaultFormFields = {
  query: '',
  location: '',
  level: '',
};

const JobForm = () => {
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const dispatch = useDispatch();

  const buildUrl = () => {
    const { query, location, level } = formFields;
    let url = `/api/jobs/`;
    if (query) {
      url += query + '/';
    }
    if (location) {
      url += location + '/';
    }
    if (level) {
      url += level;
    }
    return url;
  };

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const url = buildUrl();
    axios
      .get(url)
      .then((res) => {
        const updatedData = res.data.map((item: any) => ({
          companyLocation: item['company-location'],
          companyName: item['company-name'],
          companyRating: item['company-rating'],
          jobLink: item['job-link'],
          jobSalary: item['job-salary'],
          jobSnippet: item['job-snippet'],
          jobTitle: item['job-title'],
          postDate: item['post-date'],
        }));
        dispatch(setCurrentJob(updatedData));
      })
      .catch((error) => console.log(error));
  };

  return (
    <form
      className={`${styles.flex} ${styles.job_form}`}
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor='query'>query</label>
        <input
          type='text'
          id='query'
          placeholder='query'
          name='query'
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='location'>location</label>
        <input
          type='text'
          id='location'
          placeholder='location'
          name='location'
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='level'>level</label>
        <select id='level' name='level' onChange={handleChange}>
          <option value=''>Select Level</option>
          <option value='entry_level'>entry level</option>
          <option value='mid_level'>mid level</option>
          <option value='senior_level'>senior level</option>
        </select>
      </div>
      <button className={`${styles.submit}`}>Submit</button>
    </form>
  );
};

export default JobForm;
