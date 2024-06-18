var fs = require('fs');
var express = require('express');
var app = express();

app.all('/hi', function (req, res, next) { // MUST put me at the top of app.get('/hi')
  console.log('Accessing the secret section ...');
  next(); // [demo] pass control to the next handler
});

app.get('/hi', function(req, res) {
  res.send('hello world');
  fs.writeFileSync('/tmp/express-test.txt', 'eeee', {encoding:'utf-8'}); // [demo]
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
