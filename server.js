'use strict';

var express = require('express'),
    http = require('http'),
    mongoose = require('mongoose'),
    cfg = require('./server/config'),
    routes = require('./server/routes');


var app = express(),
    port = process.env.PORT || 3000;

app.engine('ejs.html', require('ejs').renderFile);
app.set('view engine', 'ejs.html');

app.get('/', routes.index);

app.use('/', express.static(__dirname + '/public/'));


var server = http.createServer(app).listen(port, function(){
    console.log('Express server listening on port ' + port);
});
