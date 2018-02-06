var session = require('express-session');
//require express and path
var express = require("express");
var path = require("path");
//create express app
var app = express();
//require body parser to handle post data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
//static content
app.use(express.static(path.join(__dirname, "./client/static")));
// ejs and views folder
var ejs= require("ejs")
app.set('views', path.resolve('client/views'));
app.set('view engine', 'ejs');
// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');
// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);

var sessionConfig = {
    name: 'session',
    secret: "secrettt"
}

app.use(session(sessionConfig));


app.listen(8000, function() {
    console.log("listening on port 8000");
});