import { parse } from 'rss-to-json';

exports.handler = async (event) => {
  const post_data = JSON.parse(event.body);

  // console.log(post_data.rss);

  let rss = '';

  rss = await parse(post_data.rss)
    .then((response) => response)
    .then((data) => data);

  // console.log(rss);

  return {
    statusCode: 200,
    header: JSON.stringify({ 'Access-Control-Allow-Origin': '*' }),
    body: JSON.stringify(rss),
  };
};
