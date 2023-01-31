import { getJobsList, release } from 'indeed-job-scraper';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('body...', req.query);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send("Job's API routes");
}

export const config = {
  api: {
    // disables call to body parsing module
    bodyParser: false,
  },
};
