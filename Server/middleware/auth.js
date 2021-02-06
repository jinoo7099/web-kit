const { User } = require("../models/User");

const auth = (req, res, next) => {
  //클라이언트 쿠키에서 토큰 가져오기
  const token = req.cookies.x_auth;

  //토큰 복호화후 디비에서 유저 찾기
  User;

  //있으면 ok

  //없으면 false
};

module.exports = { auth };
