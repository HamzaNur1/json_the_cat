const request = require("request");
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
// const request = require('request');
request(url, function(error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode);


  const data = JSON.parse(body)[0];
 
  if (data === undefined) {
   
    console.log("error breed cannot be found"); 
  
  }

  else { 
    // received
    console.log('body:',data.description); // Print the HTML for the Google homepage.

  }
 
});
