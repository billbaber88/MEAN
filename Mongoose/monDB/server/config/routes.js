var mongoose = require('mongoose');
var cats = require('../controllers/cats.js');

// Grabbing functions from controller
module.exports = function (app){
    app.get('/', function(req, res){
        cats.show(req, res);
    });
    
    
    app.post('/', function(req, res){
        cats.create(req, res);
    });
    
    app.get('/new', function(req, res){
        res.render('new');
    });
    
    app.get('/:id', function(req, res){
        cats.view(req, res);
    });
    
    app.get('/:id/edit', function(req, res){
        cats.edit(req, res); 
    });
    
    
    app.post('/:id', function(req, res){
        cats.update(req, res);
    });
    
    
    app.post('/:id/delete', function(req, res){
        cats.delete(req, res);
    });


}