const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 9000;
const cookieParser = require('cookie-parser');
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());



require('./config/session.js')(app);

app.set('view engine', 'ejs');


var routes_setter = require('./config/routes.js');
routes_setter(app);

app.listen(port, function() {
  console.log('what? that cant be! its over ', port);
});
