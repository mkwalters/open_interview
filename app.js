var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sessionsRouter = require('./routes/sessionRoutes');
var reservationsRouter = require('./routes/reservationRoutes');

var app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sessions', sessionsRouter);
app.use('/reservations', reservationsRouter);

app.get('*', (req, res) => {

  console.log('go serve dist/index');

  // console.log(path.join(__dirname + '../../client/build/index.html'));
  // res.sendFile(path.join(__dirname + '../../client/build/index.html'));
});

module.exports = app;
