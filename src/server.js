var express = require('express');
var app = express();
var args = process.argv.slice(2);
process.env.STATIC_SOURCE = process.env.STATIC_SOURCE || "static";

if (args.indexOf("dev") !== -1) {
	process.env.STATIC_SOURCE = "dev";
} 

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('./public'));

app.get('/', function (req, res) {
  res.render("index", {env: process.env.STATIC_SOURCE});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});