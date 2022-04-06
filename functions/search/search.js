import fetch from 'node-fetch';

exports.handler = async (event) => {
    const post_data = JSON.parse(event.body);

    const response = await fetch(`https://itunes.apple.com/search?term=${post_data.data}&entity=podcast`);
    const data = await response.json();
    
    return {
      statusCode: 200,
      header: JSON.stringify({ 'Access-Control-Allow-Origin': '*' }),
      body: JSON.stringify(data),
    };
};

