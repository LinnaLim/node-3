const http = require('http');
http.createServer((request, response) =>{

response.writeHead(200, {"Content-Type" : "text/html; charset=UTF-8"});
response.write('<style>h1 {font-family:arial; font-size: 3em;}</style>');
response.write('<h1> ça marche et vive le Québec</h1>');
response.end();

}).listen(3000);