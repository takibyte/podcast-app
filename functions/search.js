const fetch = require('node-fetch').default;

exports.handler = async (event, context) => {
    let val = event.queryStringParameters.val;

    const response = await fetch(`https://itunes.apple.com/search?term=${val}&entity=podcast`);
    const data = await response.json();
    return {
      statusCode: 200,
      headers: JSON.stringify({ 'Access-Control-Allow-Origin': '*' }),
      body: JSON.stringify({ data: data }),
    }
}
