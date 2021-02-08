document.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "login-btn":
      loginProcess();
      break;
    case "register-btn":
      registerProcess();
      break;
  }
});

function loginProcess() {
  const id = $(".input-id").val();
  const pwd = $(".input-pwd").val();
  const user = { email: id, password: pwd };

  if (id === "" || pwd === "") {
    alert("아이디나 비밀번호를 입력해주세요.");
    return;
  }
  fetch("http://127.0.0.1:3000/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.loginSuccess === false) {
        // window.location.reload();
        $(".input-id").val(null);
        $(".input-pwd").val(null);
        alert("다시 입력해주세요..");
        throw new Error("아이디, 비밀번호 오류");
      }

      location.href = "/#plan";
    })
    .catch((err) => console.log(err));
}

function registerProcess() {
  const id = $(".input-id").val();
  const pwd = $(".input-pwd").val();
  const user = { email: id, password: pwd };

  if (id === "" || pwd === "") {
    alert("아이디나 비밀번호를 입력해주세요.");
    return;
  }

  fetch("http://127.0.0.1:3000/api/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success === false) {
        alert("회원가입 실패");
        throw new Error("회원가입 실패");
      }

      window.location.reload();
      alert("회원가입 완료!");
    })
    .catch((err) => console.log(err));
}

function loginPage() {
  $(".app-root").html(`
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
    `);
}

export { loginPage };
