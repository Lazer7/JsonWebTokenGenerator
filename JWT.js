//get express framework
var express = require('express');
var app = express();
//get bodyparser middleware
var bodyParser = require('body-parser');
var CryptoJS = require('crypto-js');
var jwt = require('jsonwebtoken');
// var x = {
//     "username" : "Lazerman77777",
//     "password" : "Lazerman7",
//     "application" : "careaway",
//     "roleType" : "public"
// }

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.get('/testing', function(req,res){
    var coolbeans = {username :"hella"};
    if(coolbeans.username){
        res.send("FOO");
    } else {
        res.send("KEK");
    }
});

app.get('/', function (req, res) {
    // var x = {
    //     "username" : "isbae",
    //     "password" : "Lazerman7",
    //     "application" : "careaway",
    //     "roleType" : "public"
    // }
    // var x = {
    //     "username" : "AhriIsBae",
    //     "password" : "Lazerman7",
    //     "application" : "careaway",
    //     "roleType" : "public"
    // }
    var x = {
        "username" : "TheChosenOne12",
        "password" : "777Lazer777",
        "application" : "careaway",
        "roleType" : "private"       
    }
    // var x = {
    //     "username" : "Test1234",
    //     "password" : "Test1234Test1234Test1234",
    //     "application" : "careaway",
    //     "roleType" : "private"
    // }
    // var x = {
    //     "username" : "777Lazer777",
    //     "password" : "7777Lazer7777",
    //     "application" : "careaway",
    //     "roleType" : "public" 
    // }
    var token = jwt.sign(x,"db3OIsj+BXE9NZDy0t8W3TcNekrF+2d/1sFnWG4HnV8TZY30iTOdtVWJG8abWvB1GlOgJuQZdcF2Luqm/hccMw==");
    console.log(token);
    //     var token = jwt.sign({ } ,"2disbetterthan3d");

    //console.log(token);
    res.sendFile( __dirname + "/" + "Index.html" );
});

app.post('/process', function(req,res){
    var headtoken = req.headers.token;
    var token = req.body.jwt;
    console.log(headtoken);
    jwt.verify(headtoken,"db3OIsj+BXE9NZDy0t8W3TcNekrF+2d/1sFnWG4HnV8TZY30iTOdtVWJG8abWvB1GlOgJuQZdcF2Luqm/hccMw==",function(err, decode){
        if(err){
            console.log("BAD");
        }
        else{
            var x= jwt.decode(headtoken,{complete: true});
           // console.log(x.header);
            //console.log(x.payload);
            //console.log(x.payload.username);
            var newUser = x.payload;
            console.log(newUser);
        }
    });
    res.end('SUCCESS');
});




var server = app.listen(8085, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

 });