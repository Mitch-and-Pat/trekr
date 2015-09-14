var express = require('express');
var app = express();

// app.use('/public', express.static(''))

// TODO: update with handlebars info
// app.set('view engine', 'jade');
// app.set('views', __dirname + '/templates');

app.get('/:username?', function (req, res) {
  var username = req.params.username;
  if (username === undefined) {
    res.sendfile('index.html'); // Home of not logged in user
  } else { //if user is logged in
    res.sendfile('home.html');
  }
  // Feed of everything
  // If logged in then feed of that user's followed
});

app.post("/:username?", function (req, res) {
  // Accept description and image URL "tweets"/"pins"
  // Set up dropbox to accept uploads
});

app.get('/login', function (req, res) {
  res.sendfile('login.html');
  // Simple email form to login or signup
});

app.post('/login', function (req, res) {
  // Send user info and return profile, redirecting to /
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at port 3000');
});
