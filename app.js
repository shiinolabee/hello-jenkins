
var express = require('express');

var app = express();

var portUsed = process.env.PORT || 5000;

app.get('/', function( req, res ){
	res.send("hello world");
});



app.listen(portUsed, function(){
	console.log("Express is listening to port : " + portUsed);
});

module.exports = app;
