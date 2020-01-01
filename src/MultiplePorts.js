var express = require('express');
var things = [];
var app = express();
var admin_app = express();
var port = 8080; 
var admin_port = 8081;

app.post('/factory/', function(req, res) {
  //Create a thing and add it to the thing array
});

//Assume more functions to do to things here....

admin_app.post('/killallthings/', function(req, res) {
  //Destroy all the things in the array
});

admin_app.post('/listallthings/', function(req, res) {
  // Return a list of all the things
});

admin_app.post('/killserver/', function(req,res){
  //Kills the server after killing the things and doing clean up
});

//Assume https options properly setup.

var server = require('https').createServer(options, app);

server.listen(port, function() {
    logger.writeLog('Listening on port ' + port);
});

var admin_server = require('https').createServer(options, admin_app);

admin_server.listen(admin_port, function() {
    logger.writeLog('Listening on admin port ' + admin_port);
});