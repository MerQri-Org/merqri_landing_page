import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import { Readable } from 'stream';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/partnership', changefreq: 'monthly', priority: 0.8 },
  { url: '/waitlist', changefreq: 'monthly', priority: 0.7 }
];

const stream = new SitemapStream({ hostname: 'https://merqri.com' });
streamToPromise(Readable.from(links).pipe(stream))
  .then(data => fs.writeFileSync('public/sitemap.xml', data.toString()))
  .catch(err => console.error(err));
