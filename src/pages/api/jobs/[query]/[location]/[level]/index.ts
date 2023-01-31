import { NextApiRequest, NextApiResponse } from 'next';
import { getJobsList, release } from 'indeed-job-scraper';
import type { Data } from '@/types/Data.types';
import 'puppeteer-extra-plugin-stealth/evasions/chrome.app';
import 'puppeteer-extra-plugin-stealth/evasions/chrome.csi';
import 'puppeteer-extra-plugin-stealth/evasions/chrome.loadTimes';
import 'puppeteer-extra-plugin-stealth/evasions/chrome.runtime';
import 'puppeteer-extra-plugin-stealth/evasions/defaultArgs'; // pkg warned me this one was missing
import 'puppeteer-extra-plugin-stealth/evasions/iframe.contentWindow';
import 'puppeteer-extra-plugin-stealth/evasions/media.codecs';
import 'puppeteer-extra-plugin-stealth/evasions/navigator.hardwareConcurrency';
import 'puppeteer-extra-plugin-stealth/evasions/navigator.languages';
import 'puppeteer-extra-plugin-stealth/evasions/navigator.permissions';
import 'puppeteer-extra-plugin-stealth/evasions/navigator.plugins';
import 'puppeteer-extra-plugin-stealth/evasions/navigator.vendor';
import 'puppeteer-extra-plugin-stealth/evasions/navigator.webdriver';
import 'puppeteer-extra-plugin-stealth/evasions/sourceurl';
import 'puppeteer-extra-plugin-stealth/evasions/user-agent-override';
import 'puppeteer-extra-plugin-stealth/evasions/webgl.vendor';
import 'puppeteer-extra-plugin-stealth/evasions/window.outerdimensions';
import 'puppeteer-extra-plugin-user-preferences';
import 'puppeteer-extra-plugin-user-data-dir';
import { executablePath } from 'puppeteer';

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
