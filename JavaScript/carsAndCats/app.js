var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){
    if(request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }

    else if(request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }

    else if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
        
    else if(request.url === '/cars/new') {
        fs.readFile('./views/newcars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }

    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(contents);
         response.end();
        })
      }
// CATS
    else if(request.url === '/cat1'){
        fs.readFile('images/cat1.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
    }

    else if(request.url === '/cat2'){
        fs.readFile('images/cat2.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
    }

    else if(request.url === '/cat3'){
        fs.readFile('images/cat3.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
    }

    else if(request.url === '/cat4'){
        fs.readFile('images/cat4.jpg', function(errors, contents){
         response.writeHead(200, {'Content-type': 'image/jpg'});
         response.write(contents);
         response.end();
        });
      }

    else if(request.url === '/cat5'){
        fs.readFile('images/cat5.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
    }
// CARS
    else if(request.url === '/car1'){
        fs.readFile('images/car1.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
        });
    }
    else if(request.url === '/car2'){
        fs.readFile('./images/car2.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
        });
    }
    else if(request.url === '/car3'){
        fs.readFile('./images/car3.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
        });
    }
    else if(request.url === '/car4'){
        fs.readFile('./images/car4.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
        });
    }
    else if(request.url === '/car5'){
        fs.readFile('./images/car5.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
        });
    }

    else {
        response.writeHead(404);
        response.end("ERROR FILE NOT FOUND");
    }

      
});

server.listen(7077);