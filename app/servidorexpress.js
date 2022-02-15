var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/frontend/index.html');
})

app.get('/alegria/', function(req, res){
  res.sendFile(__dirname + '/frontend/alegria.html');
})

app.get('/tristeza/', function(req, res){
  res.sendFile(__dirname + '/frontend/tristeza.html');
})

app.get('/raiva/', function(req, res){
  res.sendFile(__dirname + '/frontend/raiva.html');
})

app.get('/medo/', function(req, res){
  res.sendFile(__dirname + '/frontend/medo.html');
})

app.get('/nojo/', function(req, res){
  res.sendFile(__dirname + '/frontend/nojo.html');
})

app.get('/desprezo/', function(req, res){
  res.sendFile(__dirname + '/frontend/desprezo.html');
})

app.get('/surpresa/', function(req, res){
  res.sendFile(__dirname + '/frontend/surpresa.html');
})


app.listen(8080, function(){
  console.log("Servidor express respondendo à porta 8080.");
})
