var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
const connectDB = require('./config/db')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var requestsRouter = require('./routes/requests');
var inventorySnapshotRouter = require('./routes/inventory');
var fixRouter = require('./routes/fix');
var companyRouter = require('./routes/company');
var customerServiceRouter = require('./routes/customer-service');
var waveRouter = require('./routes/wave');
var devicesRouter = require('./routes/devices');
var incorrectCountRouter = require('./routes/wrongItem');
var returnsRouter = require('./routes/returns');
var cleansRouter = require('./routes/cleans');
var palletsRouter = require('./routes/pallets');
var picksRouter = require('./routes/picks');
var packsRouter = require('./routes/packs');
var creditRouter = require('./routes/credits');
var packagesRouter = require('./routes/packages');
var zoneRouter = require('./routes/zones');

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

var app = express();
app.use(express.json())
app.use(cors(corsOptions));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});
connectDB()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/requests', requestsRouter);
app.use('/inventory_snapshot', inventorySnapshotRouter);
app.use('/fix', fixRouter);
app.use('/company', companyRouter);
app.use('/customer-service', customerServiceRouter);
app.use('/wave', waveRouter);
app.use('/devices', devicesRouter);
app.use('/wrongitemcount', incorrectCountRouter);
app.use('/returns', returnsRouter);
app.use('/cleans', cleansRouter);
app.use('/pallets', palletsRouter);
app.use('/picks', picksRouter);
app.use('/packs', packsRouter);
app.use('/credits', creditRouter);
app.use('/packages', packagesRouter);
app.use('/zones', zoneRouter);


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
