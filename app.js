// set variables for environment
var express = require('express'),
  app = express(),
  path = require('path'),
  /* jshint ignore:start */
  colors = require('colors'),
  /* jshint ignore:end  */
  layouts = require('express-ejs-layouts');

// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // replace with whatever template language you desire
app.use(layouts);

// instruct express to server up static assets
app.use(express.static('public'));

// Set up site routes
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/docs', function(req, res) {
  res.render('docs.ejs');
});

app.get('/controls/', function(req, res) {
  res.render('controls/index');
});

app.get('/controls/*', function(req, res) {
  var end = req.url.replace('/controls/','');
  res.render('controls/' + end, { layout: 'controls/layout.ejs' });
});

app.use(express.static(__dirname + '/controls/'), function(req, res) {
  res.render('index');
});

// With the express server and routes defined, we can start to listen for requests.
var port = process.env.PORT || 4000;
app.listen(port);

//Show Ascii Art....
console.log('                ,@@@@@@@                '.green);
console.log('       %o%o   ,@@@@@@@@@@    88888    '.green);
console.log('    ,%o%o%o%o%@@@@@@@@@@@@ 88888888  '.green);
console.log('   ,%o%o%o%o%%@@@@@@@@@@@88888888888  '.green);
console.log('   %o%o%o%o%o%o%@@@@@@ @@@@88888888888  '.green);
console.log('   %o%o%o%o%o% @@@ V @@@   8888 8888     '.green);
console.log('    `%o% o%o%     | |        o| |o      '.green);
console.log('       |o|        | |         | |       '.green);
console.log('       |.|        | |         | |       '.green);
console.log('      """"""     """"""      """"""     '.green);
console.log('');
console.log('Gramercy Park server is now listening on port %s', port);
