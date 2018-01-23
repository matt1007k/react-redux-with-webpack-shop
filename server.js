'use strict'

var express = require('express');
var app = express();
var path =  require('path');

// Definir middleware para archivos estaticos
app.use(express.static('public'));


app.get('/', function(req, res){
	res.sendFile(path.resolve(__dirname, 'public','index.html'))
});

app.listen(3100, function(){
	console.log('Server running....');
})
