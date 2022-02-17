const http = require('http')
const dt = require('./myfirstmodule')
const url = require('url')
const fs = require('fs')
const uc = require('upper-case')

http.createServer(function(req, res) {
    var path = url.parse(req.url,true).path
    
    switch(path){
        case '/':
            serveStaticFile(res,'/summer.html','text/html')
            break;
        case '/winter':
            serveStaticFile(res,'/winter.html','text/html')
            break;
        default:
            serveStaticFile(res,'/404.html','text/html')
            break;
    }

}).listen(3000)

function serveStaticFile(res,path,contentType, responseCode=200){
    // if(!responseCode)
    // {
    //     responseCode = 200
    // }

    fs.readFile(__dirname + path, function(err, data){
        if(err){
            res.writeHead(500,{'Content-Type':'text/plain'})
            res.end('500 - InternalServerError')
        }
        else{
            res.writeHead(responseCode,{'Content-Type': contentType})
            res.write(uc.upperCase("Hello world!"))
            res.end(data)
        }
    })
}