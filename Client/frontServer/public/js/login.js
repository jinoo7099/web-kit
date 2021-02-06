// $(".test").on("click", () => {
//   console.log("button");
// });

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
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.loginSuccess === false) {
        window.location.reload();
        alert("다시 입력해주세요..");
      } else {
        location.href = "/#project";
      }
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
      }

      window.location.reload();
      alert("회원가입 완료!");
    })
    .catch((err) => console.log(err));
}
