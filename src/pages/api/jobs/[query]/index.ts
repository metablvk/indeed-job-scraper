import { NextApiRequest, NextApiResponse } from 'next';
import { getJobsList, release } from 'indeed-job-scraper';
import { Data } from '@/types/Data.types';
import 'puppeteer-extra-plugin-stealth/evasions/chrome.app';
import 'puppeteer-extra-plugin-stealth/evasions/chrome.csi';
import 'puppeteer-extra-plugin-stealth/evasions/chrome.loadTimes';
import 'puppeteer-extra-plugin-stealth/evasions/chrome.runtime';

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

export const config = {
  api: {
    // disables call to body parsing module
    bodyParser: false,
  },
};
