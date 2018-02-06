var session = require('express-session');
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./client/static")));
var ejs= require("ejs")
app.set('views', path.resolve('client/views'));
app.set('view engine', 'ejs');
require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

var sessionConfig = {
    name: 'session',
    secret: "secrettt"
}

app.use(session(sessionConfig));





app.listen(8000, function() {
    console.log("listening on port 8000");
});
