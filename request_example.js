// This is the basic structure of a CJS file
// that uses the request module and the GET method

const request = require('request');

// This is the link to your API
const url = 'https://your_api_link.com/data';

// The GET method uses a callback function
// as it requests this action.
request.get(url, function (err, response, body) {
  // Error handling
  if (err) {
    console.error(err);
  } else {
    // This is the response that is received from the
    // server in the form of a status code.
    console.log(response.statusCode);
    console.log(body);
  }
});