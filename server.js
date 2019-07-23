//import the required files

var express = require('express');
var app=express();
var port=process.env.port || 3000;
var mongoose=require('mongoose');
var schemaPath=require('./api/model/schema');
var bodyParser=require('body-parser');
var cors=require('cors');
var passport=require('passport');
var morgan=require('morgan');
var cookieParser=require('cookie-parser');
var session=require('express-session');
var fs = require('fs');
var multer = require('multer');



app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/bookworld');



var routes=require('./api/route/apiRoute');
routes(app);


app.listen(port);
console.log("node server started at port ",port);