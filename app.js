var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require ('./config');
var routes = require('./routes');/*сюда записываем переменные*/
var users = require('./routes/user');
var video = require ('./routes/video');
var anketa = require ('./routes/anketa');
var canvas = require ('./routes/canvas');
var drop = require ('./routes/drop');
var map = require ('./routes/map');
var storage = require ('./routes/storage');
var add = require ('./routes/add');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

app.get('/', routes.index);
app.get('/users', users.list);
app.get('/video', video.index);
app.get('/anketa', anketa.index);
app.get('/canvas', canvas.index);
app.get('/drop', drop.index);
app.get('/map', map.index);
app.get('/storage', storage.index);
app.get('/:id', routes.index); /*всегда последний*/
app.get('/:id/add', add.index);//тут есть id


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(config.get('port'));
module.exports = app;
