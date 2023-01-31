import { NextApiRequest, NextApiResponse } from 'next';
import { getJobsList, config } from 'indeed-job-scraper';
import type { Data } from '@/types/Data.types';

config['base-URL'] = 'https://ca.indeed.com/';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  /**
   * api/jobs/:query/:location api route
   * @param {string} - query
   * @param {string} - location
   */
  const { query, location } = req.query;
  getJobsList({
    query: query,
    fromdays: 1,
    sitetype: 'employer',
    sort: 'date',
    maxperpage: 20,
    location: location,
  }).then((data: Data) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(data);
  });
}
