var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var history = require('connect-history-api-fallback');
var indexRouter = require('./routes/index'); //首页
var uploadRouter = require('./routes/upload'); //上传
var pageRouter = require('./routes/detailPage'); //具体页面
var getRouter = require('./routes/getPage');  //首页所有文章
var typeRouter = require('./routes/getType'); //有哪些类型
var typePageRouter = require('./routes/typePage'); //具体的类型文章
var testRouter = require('./routes/test');  //测试
var live2dRouter = require('./routes/live2d');//live2d模型
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// app.use('/home',indexRouter);
app.use('/upload', uploadRouter);
app.use('/page',pageRouter);
app.use('/getPage',getRouter);
app.use('/getType',typeRouter);
app.use('/typePage',typePageRouter);
app.use('/test',testRouter);
app.use('/live2d',live2dRouter);
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
  res.render('error');
});

module.exports = app;
