import { parse } from 'rss-to-json';

export const handler = async (event) => {
  try {
    const post_data = JSON.parse(event.body);
    const rss = await parse(post_data.rss);

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },  // "headers" not "header"
      body: JSON.stringify(rss),
    };
  } catch (err) {
    console.error('get-rss error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
