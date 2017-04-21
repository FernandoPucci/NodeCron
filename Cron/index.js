// Load the http module to create an http server.
var http = require('http');
var express = require('express');
var cron = require('node-cron');

var app = express();

var PORT = 8000;
var cronExpression = '*/10 * * * * *';
var cronExpression2 = '* * * * *'; //every minute

app.use(express.static(__dirname + '/app'));
app.listen(PORT);

//HTTP SERVER
// var server = http.createServer(function (request, response) {
//  // response.writeHead(200, {"Content-Type": "text/html"});
//  //   response.render('./app/index.html');
//  //  response.end("Servidor OK!\n");
// });



app.get('/', function (req, res) {

    res.send('Express server is UP! - ' + new Date().toLocaleString());

});

console.log("Server running at http://127.0.0.1:" + PORT + "/");
console.log(new Date().toLocaleString());

////FUNCTIONS
var logFunction = function log() {
    return "Function fired at: >>> " + new Date().toLocaleString();
};

/// Node-Cron Instructions
/**
 * 
 # ┌────────────── second (optional)
 # │ ┌──────────── minute
 # │ │ ┌────────── hour
 # │ │ │ ┌──────── day of month
 # │ │ │ │ ┌────── month
 # │ │ │ │ │ ┌──── day of week
 # │ │ │ │ │ │
 # │ │ │ │ │ │
 # * * * * * *
 */
////NODE-CRON CONFIGURATIONS
cron.schedule(cronExpression, function () {
    console.log(logFunction());
}
); //every second ended with '0'

//Multi Cron-Expressions
cron.schedule(cronExpression2, function () {
    console.log("\n## 2: " + logFunction() + "\n\n");
}
); //every second ended with '0'                                        
