var express = require('express')
var app = express()

//Allow user to access static files
app.use(express.static('public'));

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/hello.html', function (req, res) {
  res.send('Express - Hello World!')
})

app.get('/form.html', function (req, res) {
  res.sendFile( __dirname + "/" + "form.html" );
})

app.get('/file.html', function (req, res) {
  res.sendFile( __dirname + "/" + "file.html" );
})


// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})

app.listen(3000, function () {
  console.log('Express app listening on port 3000!')
})