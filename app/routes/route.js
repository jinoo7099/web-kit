const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const userDataList = require('../mockdata/user.json');
const userTodoList = require('../mockdata/userTodo.json');
const userState = userDataList.userData;
const userTodo = userTodoList.userTodoList;

router.get('/login', (req, res) => {
  if (req.session.is_logined === true) {
    res.redirect('/app/todo');
  } else {
    res.render('index');
  }
});

router.get('/todo', (req, res) => {
  console.log(req.session.id);
  res.render('todo', { userTodo: userTodo });
});

router.get('/logout_process', (req, res) => {
  req.session.destroy(function (err) {
    res.redirect('/app/login');
  });
});

router.post('/login_process', function (req, res) {
  const post = req.body;
  const email = post.id;
  const pwd = post.pw;
  if (findUser(email, pwd)) {
    req.session.is_logined = true;
    req.session.save(function () {
      res.redirect('/app/todo');
    });
  } else {
    res.send('who?');
  }
});

function findUser(id, pwd) {
  return userState.find((el) => id === el.id && pwd === el.pwd);
}

module.exports = router;
