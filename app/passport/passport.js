const LocalStrategy = require('passport-local').Strategy;
const userData = require('../mockdata/user.json');
const userTodoListData = require('../mockdata/userTodo.json');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const fs = require('fs');
exports.config = (passport) => {
  passport.use(
    new LocalStrategy(
      { usernameField: 'id', passwordField: 'pw' },
      function (username, password, done) {
        const selectedUser = userData.userData.find((el) => el.id === username);
        if (selectedUser) {
          if (password === selectedUser.pwd) {
            return done(null, selectedUser);
          } else {
            return done(null, false, {
              message: 'incorrect Password',
            });
          }
        } else {
          return done(null, false, {
            message: 'Incorrect username.',
          });
        }
      },
    ),
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: '311661317757-ccjal9kl2fh849v36rfqt7ffsaj16obs.apps.googleusercontent.com',
        clientSecret: '_IwMTBBoZn8-j3qCJDteCKep',
        callbackURL: 'http://localhost:3000/auth/google/callback',
      },
      function (accessToken, refreshToken, profile, done) {
        if (!userData.userData.find((el) => el.id === profile.id)) {
          userData.userData.push({ id: profile.id });
          userTodoListData.userTodoList.push({ id: profile.id, todo: [], doing: [], done: [] });
          fs.writeFileSync('mockdata/user.json', JSON.stringify(userData));
          fs.writeFileSync('mockdata/userTodo.json', JSON.stringify(userTodoListData));
        }
        done(null, profile);
      },
    ),
  );

  passport.serializeUser(function (user, done) {
    // const session = { sid : user.se}
    // fs.writeFileSync('mockdata/sessions.json')
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    const selectedUser = userData.userData.find((el) => el.id === id);
    if (selectedUser) {
      done(null, selectedUser);
    } else {
      done(null, false);
    }
  });
};
