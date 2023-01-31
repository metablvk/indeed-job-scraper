import { NextApiRequest, NextApiResponse } from 'next';
import { getJobsList, release } from 'indeed-job-scraper';
import type { Data } from '@/types/Data.types';
import 'puppeteer-extra-plugin-stealth/evasions/chrome.app';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  /**
   * api/jobs/:query/:location/:level api route
   * @param {string} - query
   * @param {string} - location
   * @param {string} - level
   */
  const { query, location, level } = req.query;
  getJobsList({
    query: query,
    fromdays: 1,
    sitetype: 'employer',
    sort: 'date',
    maxperpage: 20,
    location: location,
    level: level,
  }).then((data: Data) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(data);
  });
}

export const config = {
  api: {
    // disables call to body parsing module
    bodyParser: false,
  },
};
