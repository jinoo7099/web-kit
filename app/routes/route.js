const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const data = require('../mockdata/user.json');
var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const mockdata = data.userData;
const user = [
  {
    id: 'vxc79',
    pwd: '1234',
  },
  {
    id: 'park',
    pwd: '123456',
  },
];
// router.get('/', (req, res) => {
//   res.render('index.html');
// });

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/main', (req, res) => {
  console.log('hi');
  res.render('main');
});

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/app/main',
    failureRedirect: '/app',
    failureFlash: true,
  }),
);

passport.use(
  new LocalStrategy(
    {
      usernameField: 'id',
      passwordField: 'pwd',
    },
    function (id, pwd, done) {
      if (findUser(id, pwd)) {
        console.log('조회 성공');
        const userData = { id: id, pwd: pwd };
        return done(null, userData);
      } else {
        console.log('조회 실패');
      }
    },
  ),
);

function findUser(id, pwd) {
  return user.find((el) => id === el.id && pwd === el.pwd);
}

passport.serializeUser((userData, done) => {
  done(null, userData.id);
});

passport.deserializeUser((userData, done) => {
  done(null, userData);
});
module.exports = router;
