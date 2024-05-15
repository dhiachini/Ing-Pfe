var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const routerAccountRequests = require('./routes/accountrequest.route')
const uploadRouter = require('./routes/accountrequest.route');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log('DB connected'))
.catch(err => console.log(err.message   ))


app.use('/api', routerAccountRequests)
app.use('/upload', uploadRouter);


module.exports = app;
