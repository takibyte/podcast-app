import Parser from 'rss-parser';

export let rss;

// Note: some RSS feeds can't be loaded in the browser due to CORS security.
// To get around this, you can use a proxy.
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

let parser = new Parser();
parser.parseURL(CORS_PROXY + 'https://www.reddit.com/.rss', function(err, feed) {
  if (err) throw err;
  console.log(feed.title);
  feed.items.forEach(function(entry) {
    console.log(entry.title + ':' + entry.link);
  })
});

export default rss;
