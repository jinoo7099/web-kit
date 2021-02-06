const { User } = require("../models/User");
const auth = (req, res, next) => {
  // 클라이언트 쿠키에서 토큰 가져옴
  const token = req.cookies.x_auth;
  // 복호화
  User.findByToken(token, (err, user) => {
    if (err) {
      throw err;
    }
    if (!user) {
      return res.json({ isAuth: false, error: true });
    }

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
