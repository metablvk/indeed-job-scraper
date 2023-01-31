import { NextApiRequest, NextApiResponse } from 'next';
import { getJobsList, config } from 'indeed-job-scraper';
import type { Data } from '@/types/Data.types';

config['base-URL'] = 'https://ca.indeed.com/';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  /**
   * api/jobs/:query api route
   * @param {string} - query
   */
  const { query } = req.query;
  getJobsList({
    query: query,
    fromdays: 1,
    sitetype: 'employer',
    sort: 'date',
    maxperpage: 20,
  }).then((data: Data) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
}
