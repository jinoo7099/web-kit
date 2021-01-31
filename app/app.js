const express = require('express');
const app = express();
const router = require('./routes/route');
const bodyParser = require('body-parser');
const session = require('express-session');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(
  session({
    secret: 'ambc@!vsmkv#!&*!#EDNAnsv#!$()_*#@',
    resave: false,
    saveUninitialized: true,
  }),
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static(__dirname + '/public'));

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

app.use(passport.initialize());
app.use(passport.session());

app.use('/app', router);

app.listen(3000, () => {
  console.log('connected server..');
});
