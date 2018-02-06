var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){
    var file; 
    
    switch (request.url) {
        case "/":
            file = "index.html"
            break;

        case "/ninjas":
            file ="ninjas.html"
            break;
        
        case "/dojos/new":
            file = "dojo.html"
            break;

        default: 
            file = null;
            break;
    }


    if (file !== null) {
        fs.readFile(`${file}`, 'utf8', function(errors, contents){
            if (errors) { console.log(errors); }
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
            
    } else {
        response.writeHead(404);
        response.end("ERROR FILE NOT FOUND");
    }
});

server.listen(6789);