const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const fs = require('fs');

router.get('/login', (req, res) => {
  // if (req.session.is_logined === true) {
  //   res.redirect('/todo');
  // } else {
  res.render('index');
  // }
});

router.get('/todo', (req, res) => {
  const userTodo = require('../mockdata/userTodo.json').userTodoList;
  console.log(req.user);
  const selectedUser = userTodo.find((el) => el.id === req.user.id);

  res.render('todo', {
    todo: selectedUser.todo,
    doing: selectedUser.doing,
    done: selectedUser.done,
  });
});

router.post('/todo/add', (req, res) => {
  const data = fs.readFileSync('mockdata/userTodo.json');
  const userTodoList = JSON.parse(data.toString());
  const selectedUser = userTodoList.userTodoList.find((el) => el.id === req.user.id);

  selectedUser.todo.push(req.body);

  fs.writeFileSync('mockdata/userTodo.json', JSON.stringify(userTodoList));
  res.send(JSON.stringify({ result: 'create' }));
});

router.post('/todo/delete', (req, res) => {
  const data = JSON.parse(fs.readFileSync('mockdata/userTodo.json'));
  const userTodoList = data.userTodoList;
  const selectedUser = userTodoList.find((el) => el.id === req.user.id);

  removeTask(selectedUser[req.body.state], req);
  fs.writeFileSync('mockdata/userTodo.json', JSON.stringify(data));

  res.send('complete');
});

function removeTask(array, req) {
  const removedIdx = array.findIndex(
    (el) => el.name === req.body.name && el.date === req.body.date,
  );
  if (removedIdx !== -1) {
    array.splice(removedIdx, 1);
  }
}

router.post('/todo/update', (req, res) => {
  const data = JSON.parse(fs.readFileSync('mockdata/userTodo.json'));
  const userTodoList = data.userTodoList;
  const selectedUser = userTodoList.find((el) => el.id === req.user.id);

  removeTask(selectedUser[req.body.state], req);
  updateTask(selectedUser, req);
  fs.writeFileSync('mockdata/userTodo.json', JSON.stringify(data));
  res.send('complete');
});

function updateTask(selectedUser, req) {
  const data = fs.readFileSync('mockdata/userTodo.json');
  const state = req.body.state;

  if (state === 'todo') {
    selectedUser.doing.push({ name: req.body.name, date: req.body.date });
  } else if (state === 'doing') {
    selectedUser.done.push({ name: req.body.name, date: req.body.date });
  } else {
    selectedUser.todo.push({ name: req.body.name, date: req.body.date });
  }
}

router.post(
  '/login_process',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function (req, res) {
    req.session.is_logined = true;
    saveUserSession(req);
    req.session.save(function () {
      res.redirect('/todo');
    });
  },
);

router.get('/logout_process', (req, res) => {
  req.session.is_logined = false;
  saveUserSession(req);
  req.session.destroy(function (err) {
    res.redirect('/login');
  });
});

function saveUserSession(req) {
  const date = new Date();
  const data = JSON.parse(fs.readFileSync('mockdata/sessions.json'));
  const userSession = {
    sid: req.sessionID,
    id: req.session.passport.id,
    is_logined: req.session.is_logined ? true : false,
    date: date.toISOString(),
  };
  data.sessions.push(userSession);
  fs.writeFileSync('mockdata/sessions.json', JSON.stringify(data));
}
module.exports = router;
