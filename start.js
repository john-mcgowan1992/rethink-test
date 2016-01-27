var r = require('rethinkdb');
var express = require('express');
var app = express();

var connection = null;
var databaseName = 'capstone_test'
r.connect({
    host: 'localhost',
    port: 28015
}, function(err, conn) {
    if (err) throw err;
    connection = conn;
	connection.use(databaseName)
})

app.use(express.static(__dirname));
app.use(express.static('node_modules'));

app.get('/', function(req,res,next){
	res.sendFile(__dirname + '/index.html')
})

app.get('/rethink-test', function(req,res,next){
	r.table('songs').changes().run(connection)
	.then(function(cursor){
		var arr = [];
		cursor.each(function(err,row){
            arr.push(row);
		})
		// return arr;
	.then(function(array){
		res.send(array);
	})
	})


})

app.listen('3333', function(){
	console.log('Listening on port 3333')
})