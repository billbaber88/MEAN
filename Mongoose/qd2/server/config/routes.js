var mongoose = require('mongoose');
var quotes = require('../controllers/quotes.js');


module.exports = function (app){
    app.get('/', function(req, res){
        res.render('welcome')
    })
    
    app.post('/quotes', function(req, res){
        // calling the function from quotes.js
        quotes.create(req, res);
    })

    app.get('/quotes', function(req, res){
        // calling the function from quotes.js
        quotes.show(req, res);
    })
}











