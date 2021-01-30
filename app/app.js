const express = require('express');
const app = express();
const router = require('./routes/route.js');

app.set('views', './views');
app.set('view engine', 'pug');

app.use('/js', express.static(__dirname + '/js'));
app.use('/utils', express.static(__dirname + '/utils'));
app.use('/', router);

app.listen(3000, () => {
  console.log('server connect');
});
