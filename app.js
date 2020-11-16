var express = require('express');
var controller = require('./controllers/controller');

var app = express();

// template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// fire controller
controller(app);

app.listen(3000);
console.log('Listening on port 3000');