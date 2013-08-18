var express = require('express'),
  app = express(),
  http = require('http'),
  fs = require('fs');

app.configure( function() {
  app.set('port', process.env.PORT || 80);
  app.set('views','./views');
  app.set('views','./views');
  app.set('view engine', 'jade');
  app.use(app.router);
  app.use('/public', express.static(__dirname+'/public'));
});

var j = 0;
app.get('/', function(req, res) {
  res.render('layout.jade', {})
  j += 1;
  var n = {"time":new Date().toDateString(), "count": j};
  fs.appendFile('count.txt', JSON.stringify(n) + ',', function(e){if(e)throw e});
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('listening on port ' + app.get('port'));
});
