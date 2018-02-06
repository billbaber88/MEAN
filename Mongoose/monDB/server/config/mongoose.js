var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
//change below for db
mongoose.connect('mongodb://localhost/monDB');

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >= 0){
        require(models_path + '/' + file);
    }
});