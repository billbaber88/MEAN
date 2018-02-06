var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');

module.exports = {
    show: function(req, res){
        Quote.find({}, function(err, quotes){
            if(err){
                console.log(err);
            }
            res.render('quotes', { quotes: quotes});
        });
    },

    create: function(req, res){
        Quote.create(req.body, function(err){
            if(err){
                console.log(err)
            }
            res.redirect('/quotes')
        });
   }


}