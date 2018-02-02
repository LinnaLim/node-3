const http = require('http');
const fs = require('fs');
let provinces;

fs.readFile('provinces.json', 'utf8', function (err, data) {
	if (err) throw err;
	provinces = JSON.parse(data);
});

http.createServer((request, response) =>{

	console.log(provinces);
	response.writeHead(200, {"Content-Type" : "text/html; charset=UTF-8"});
	response.write('<style>h1 {font-family:arial; font-size: 3em;}</style>');
	response.write('<h1> ça marche et vive le Québec</h1>');
	response.end();

}).listen(3000);