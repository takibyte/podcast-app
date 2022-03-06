import { parse } from 'rss-to-json';

// async await

(async () => {
  const rss = await parse(`https://feeds.megaphone.fm/TPC2985326322`);
  // console.log(JSON.stringify(rss, null, 3));
})();

// parse('https://feeds.megaphone.fm/TPC2985326322')
//   .then(response => {
//     rss = response;
//     // console.log(JSON.stringify(rss, null, 3));
//   });
