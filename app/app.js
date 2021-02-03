const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRoute');
const authRouter = require('./routes/authRoute');
const bodyParser = require('body-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const passport = require('passport');
const flash = require('connect-flash');
require('./passport/passport').config(passport);

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(
  session({
    secret: 'ambc@!vsmkv#!&*!#EDNAnsv#!$()_*#@',
    resave: false,
    saveUninitialized: true,
    store: new FileStore({ logFn: function () {} }),
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(flash());

app.use('/public', express.static(__dirname + '/public'));
app.use('/', indexRouter);
app.use('/auth', authRouter);

app.listen(3000, () => {
  console.log('connected server..');
});
