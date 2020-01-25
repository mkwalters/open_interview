var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

//var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sessionsRouter = require('./routes/sessionRoutes');
var reservationsRouter = require('./routes/reservationRoutes');

var app = express();

// the commented out code is for connecting to the local database
// we should check ENV variable and connect to the appropraite db 

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
const mongoose = require('mongoose');
var mongodbUri = 'mongodb://heroku_r1x1vsv2:vsibjstf5n1doq6n6v04sarblh@ds213705.mlab.com:13705/heroku_r1x1vsv2'
mongoose.connect(mongodbUri, options);

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/client/dist/' ));


//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sessions', sessionsRouter);
app.use('/reservations', reservationsRouter);

app.get('*', (req, res) => {

  console.log('go serve dist/index');

  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

module.exports = app;
