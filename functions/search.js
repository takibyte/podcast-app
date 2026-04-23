
exports.handler = async (event) => {
  try {
    const post_data = JSON.parse(event.body);
    const response = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(post_data.data)}&entity=podcast`
    );
    const data = await response.json();

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.error('Search function error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ results: [], error: err.message }),
    };
  }
};