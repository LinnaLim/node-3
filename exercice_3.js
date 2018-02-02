const http = require('http');
const fs = require('fs');
let provinces;

fs.readFile('provinces.json', 'utf8', function (err, data) {
	if (err) throw err;
	provinces = JSON.parse(data);
});

http.createServer((request, response) =>{
	//console.log(provinces);

	let html = "<DOCTYPE html>"
	html += "<body>";
	html += "<h1>Les Provinces du Canada</h1>";
	
	html += "<table>";

	for (var nom in provinces){
		html+= "<tr>";
		html+= "<td>" + nom +"</td>";
		html+= "<td>" + provinces[nom] +"</td>";
		html+= "</tr>";
	}

	html +="</table>";

	html += "</body>";
	html +="</html>" 


	response.writeHead(200, {"Content-Type" : "text/html; charset=UTF-8"});
	response.write('<style>h1 {font-family:arial; font-size: 3em;}</style>');
	response.write(html);
	response.end();

}).listen(3000);