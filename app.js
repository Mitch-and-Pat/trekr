var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var Officer = require('./models/officer.js');
// var Counter = require('./db/counter.js');
// app.locals.users = [];

// app.use('/public', express.static(''))

// TODO: update with handlebars info
// app.set('view engine', 'jade');
// app.set('views', __dirname + '/templates');
app.use(express.static('public'));
app.use(bodyParser());

// app.get('/:username?', function (req, res) {
//   req.app.locals.users.push(username);
//   if (username === undefined) {
//     res.sendfile('index.html'); // Home of not logged in user
//   } else { //if user is logged in
//     res.sendfile('home.html');
//   }
//   // Feed of everything
//   // If logged in then feed of that user's followed
// });
//
// app.post("/:username?", function (req, res) {
//   // Accept description and image URL "tweets"/"pins"
//   // Set up dropbox to accept uploads
// });

app.get('/login', function (req, res) {
  res.sendfile('views/login.html');
  // Simple email form to login or signup
});

app.post('/login', function (req, res) {

  // Send user info and return profile, redirecting to /
});

app.get('/signup', function (req, res) {
  res.sendfile('views/signup.html');
});

app.post('/signup', function (req, res) {
  var cache = parseInt(fs.readFileSync('db/counter.txt').toString());
  console.log(cache);
  var userExists = false;
  if (userExists) {
    var m = JSON.parse(fs.readFileSync('db/users.json').toString());
    alert("That username is already taken. Please log in if it is you.");
  } else {
    console.log("Signup is posting!");
    var newOfficer = new Officer(req.body.full_name, req.body.email, req.body.user_name);
    var n = fs.readFileSync('db/' + cache + '_users.json');
    var o = JSON.parse(n.toString());
    o[Object.keys(o).length] = newOfficer;
    console.log(o);
    fs.writeFileSync('db/' + (cache + 1) + '_users.json', JSON.stringify(o));
  }
  fs.writeFileSync('db/counter.txt', (cache + 1));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at port 3000');
});

module.exports = app;
