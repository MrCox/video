var fs = require('fs'),
  path = require('path'),
  mongoClient = require('mongodb').MongoClient,
  storage = "567546535.r.cdn77.net/";

mongoClient.connect("mongodb://127.0.0.1/admin", {native_parser:true}, function(err, db){
	fs.readdir(process.cwd(), function(err, files){
		if (err) throw err;
		files.forEach(function(f, i){
      if (f == "updateDB.js") return;
      var entry = {};
      entry.video = storage + f;
      entry.jpg = storage + f + '.jpg';
      entry.title = f;
      console.log(f)
      db.collection('videos').insert(entry, function(err) {console.log(err) });
		});
	});
});
