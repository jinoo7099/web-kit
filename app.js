const express = require('express');
const app = express();
const router = require('./router/router.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/testDB');

const db = mongoose.connection;

db.on('error', () => {
  console.log('Connection Failed!');
});

db.once('open', () => {
  console.log('Connect DB');
});

app.listen(3000, () => {
  console.log('Connect server');
});

// 화면 engine을 ejs로 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 기본 path를 /public으로 설정(css, javascript 등의 파일 사용을 위해
app.use('/public', express.static(__dirname + '/public'));
app.use('/', router);
