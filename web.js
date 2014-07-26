var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('Hello World with DB !!');
});

app.get('/db', function(req, res) {
	//res.send('DB !! WUHU !!!!');
	
	var mongo = require('mongodb');
	
	
	var mongoUri = process.env.MONGOSOUP_URI ||
		process.env.MONGOSOUP_URL ||
		'mongodb://localhost/mydb';
	
	//res.send(' # '+mongoUri);
	
	
	mongo.Db.connect(mongoUri, function (err, db) {
		db.collection('mydocs2', function(er, collection) {
			collection.insert({'mykey': 'myvalue','name','chris'}, {safe: true}, function(er,rs) {
				res.send(' # DONE !!! ');
			});
		});
	});
	

	
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});








/*




*/
