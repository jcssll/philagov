// Create a request variable and assign a new XMLHttpRequest object to it.
/*
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://cors-anywhere.herokuapp.com/https://www.phila.gov/wp-json/wp/v2/posts/', true)

request.onload = function () {
  // Begin accessing JSON data here

  
  }


// Send request
request.send()
*/

const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/wp-json/wp/v2/posts/', (req, res) => {
  request(
    { url: 'https://www.phila.gov/wp-json/wp/v2/posts/' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));