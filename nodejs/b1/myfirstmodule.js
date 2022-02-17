const http = require('http')
const fs = require('fs')

function serveStaticFile(res,path,contentType, responseCode){
    if(!responseCode)
    {
        responseCode = 200
    }

    fs.readFile(__dirname + path, function(err, data){
        if(err){
            res.writeHead(500,{'Content-Type':'text/plain'})
            res.end('500 - InternalServerError')
        }
        else{
            res.writeHead(responseCode,{'Content-Type': contentType})
            res.end(data)
        }
    })
}