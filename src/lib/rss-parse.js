import { parse } from 'rss-to-json';
import { shows } from './stores';

export let promises = [];

export function get_rss() {
  for (let i = 0; i < shows.length; i++) {
    promises[i] = parse(shows[i].url)
      .then((rss) => rss);
  }
}

// promises[0] = parse(shows[0].url)
//   .then((rss) => {
//     // console.log(JSON.stringify(rss, null, 3));
//     return rss;
//   });
