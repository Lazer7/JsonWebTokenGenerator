// Get express framework
var express = require('express');
var app = express();

// Get middleware modules
var bodyParser = require('body-parser');
var CryptoJS = require('crypto-js');
var jwt = require('jsonwebtoken');

app.use(bodyParser.urlencoded({
    extended: true
}));
/**
 * This is a GET request to get index.html file
 */
app.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8085');
    res.sendFile( __dirname + "/" + "Index.html" );
});
/**
 * This is a GET request to get a Json Web Token
 */
app.get('/gimmeJWT', function(req,res){
    // Generates a user object with username, password, application being sent to, and roletype
    var user = {
        "username" : req.query.username,
        "password" : req.query.password,
        "application" : "careaway",
        "roleType" : "public" 
    };
    // Generates the Json Web Token
    var token = jwt.sign(user,"db3OIsj+BXE9NZDy0t8W3TcNekrF+2d/1sFnWG4HnV8TZY30iTOdtVWJG8abWvB1GlOgJuQZdcF2Luqm/hccMw==");
    res.end(token);
});

var server = app.listen(8085, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port)

 });