/*
Simple hello world

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');

*/
var Request = require("request");
var http = require('http');

Request.get("https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/5UXWX7C5*BA?format=json&modelyear=2011", (error, response, body) => {
if(error) {
    return console.dir(error);
}
console.dir(JSON.parse(body));
});
