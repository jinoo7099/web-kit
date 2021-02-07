function loginPage() {
  const root = document.querySelector(".app-root");
  root.innerHTML = `<h1>로그인</h1>
                <div class="login-input-wrap">
                    <input class="input-id" type="text" name="id" placeholder="email">
                </div>
    
                <div class="login-input-wrap password-wrap">
                    <input class="input-pwd" type="password" name="pw" placeholder="password">
                </div>
    
                <div class="login-button-wrap">
                    <button class="login-btn">login</button>
                </div>
                <div class="register-button-wrap">
                    <button class="register-btn">register</button>
                </div>
  
                `;
}

export { loginPage };
