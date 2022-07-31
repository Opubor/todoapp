var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const cors = require('cors')
const res = require('express/lib/response');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: '127.0.0.1:5500'
}))

app.get('/', function(req, res){
  res.send('Todo task V 1.0.0')
})


app.get('/api/v1/ping', function(req,res){
  res.json({message: "Welcome to the todo api"})
})
app.use('/api/v1/todos', require('./routes/api/v1/todo'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error');
});

module.exports = app;
