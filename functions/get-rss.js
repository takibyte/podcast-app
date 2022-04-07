import { parse } from 'rss-to-json';

exports.handler = async (event) => {
  const post_data = JSON.parse(event.body);

  console.log(post_data.rss);

  let rss = [];

  for (let i = 0; i < post_data.rss.length; i++) {
    rss[i] = parse(post_data.rss[i])
      .then((response) => response)
      .then((data) => data)
      .catch((err) => err);
  }

  console.log(rss);

  return {
    statusCode: 200,
    header: JSON.stringify({ 'Access-Control-Allow-Origin': '*' }),
    body: JSON.stringify(rss),
  };
};
