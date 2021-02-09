function loginView(elementId) {
  this.el = document.querySelector(`${elementId}`);
}

loginView.prototype = {
  getinitLoginPage: function () {
    return `
        <div class="js-login-container">
          <div class="js-login-header">
            <h1>Sign in</h1>
          </div>
      
          <div class="js-login-section">
      
            <label>Username or email address</label>
            <div class="login-input-wrap">
              <input class="input-id" type="text" name="id" placeholder="email">
            </div>
      
            <label>Password</label>
            <div class="login-input-wrap password-wrap">
                <input class="input-pwd" type="password" name="pw" placeholder="password">
            </div>
      
            <div class="login-button-wrap">
                <button class="login-btn">login</button>
            </div>
      
            <div class="register-button-wrap">
                <button class="register-btn">register</button>
            </div>
          </div>
          
        </div>
          `;
  },
  getIdAndPwd: function () {
    const id = $(".input-id").val();
    const pwd = $(".input-pwd").val();
    const user = { email: id, password: pwd };

    if (id === "" || pwd === "") {
      alert("아이디나 비밀번호를 입력해주세요.");
      throw new Error("id or pwd empty");
    }

    return user;
  },
  displayLoginPage: function () {
    this.el.innerHTML = this.getinitLoginPage();
  },
};

export { loginView };
