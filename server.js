// proof that node.js will continue to process function requests.. even though the trigger for the function (in this case an http request) does not fire.

var http = require('http');
var url = require('url');

function start(route, handle){
	function onRequest(request,response){
		//add url lib code here:
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		route(handle, pathname, response, request);			
	}

	http.createServer(onRequest).listen(8888);
	console.log('Server has started.');
}

exports.start = start;