import { parse } from 'rss-to-json';

export let promises = [];

export function get_rss() {

  promises[0] = parse('https://feeds.megaphone.fm/TPC2985326322')
    .then((rss) => {
      // console.log(JSON.stringify(rss, null, 3));
      return rss;
    });

  promises[1] = parse('https://feeds.megaphone.fm/darknetdiaries')
    .then((rss) => {
      return rss;
    });

  promises[2] = parse('https://feeds.megaphone.fm/darknetdiaries')
    .then((rss) => {
      return rss;
    });

  promises[3] = parse('https://wakingup.libsyn.com/rss')
    .then((rss) => {
      return rss;
    });

  promises[4] = parse('https://feeds.megaphone.fm/TPC2985326322')
    .then((rss) => {
      // console.log(JSON.stringify(rss, null, 3));
      return rss;
    });

  promises[5] = parse('https://feeds.megaphone.fm/darknetdiaries')
    .then((rss) => {
      return rss;
    });

  promises[6] = parse('https://feeds.megaphone.fm/darknetdiaries')
    .then((rss) => {
      return rss;
    });

  promises[7] = parse('https://wakingup.libsyn.com/rss')
    .then((rss) => {
      return rss;
    });
}
