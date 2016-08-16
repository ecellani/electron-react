/**
 * Created by Erick Cellani
 */

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/front'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/front/static/index.html'));
});

app.listen(8080);
require('./back/src/backend').start()
