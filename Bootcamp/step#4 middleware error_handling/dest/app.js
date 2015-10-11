/// <reference path='../typings/tsd.d.ts' />
var express = require('express');
var path = require('path');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, './../views'));
app.set('view engine', 'ejs');
//Express Built-in Middleware
app.use(express.static(path.join(__dirname, '/../public')));
//Custom Middleware
app.use(function (req, res, next) {
    console.log('Middleware 1');
    console.log('Time:', Date.now());
    next();
});
app.use(function (req, res, next) {
    console.log('Middleware 2');
    console.log('Time:', Date.now());
    next('error');
});
app.use(function (req, res, next) {
    console.log('Middleware 3');
    console.log('Time:', Date.now());
    next();
});
//Error-handling middleware
//Error-handling middleware always takes four arguments. You must provide four arguments to identify it as an error-handling middleware. Even if you don’t need to use the next object, you must specify it to maintain the signature, otherwise it will be interpreted as regular middleware and fail to handle errors.
//Define error-handling middleware like other middleware, except with four arguments instead of three, specifically with the signature (err, req, res, next)):
app.use(function (err, req, res, next) {
    console.log('Error Middleware');
    res.send(err);
});
app.get('/', function (req, res) {
    res.render('index');
});
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var listeningPort = server.address().port;
    console.log('The server is listening on port: ' + listeningPort);
});
