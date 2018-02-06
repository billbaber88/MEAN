var mongoose = require('mongoose');

var CatSchema = mongoose.Schema({
    name: String,
    weight: Number,
    color: String
});

var Cat =  mongoose.model('Cat', CatSchema);
