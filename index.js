var express = require('express');
var app = express();

app.use(express.static('./'));

app.get('/', function(req, res) {
  res.send('API-BLUEPRINT');
})

app.listen(3000);
