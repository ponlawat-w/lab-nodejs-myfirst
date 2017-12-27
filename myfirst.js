var http = require('http');
var url = require('url');
var date = require('./date');

http.createServer(function (request, response)
{
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<meta charset="utf-8">')
    response.write('<h2>Current Date and Time</h2>');
    response.write('ขณะนี้เวลา:' + date.currentDate());
    response.write('<br>');
    response.write('Request URL:' + request.url);
    var params = url.parse(request.url, true).query;
    console.log(params);
    response.end();
}).listen(8080);