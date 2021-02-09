function loginModel(data) {
  this.data = data;
}

loginModel.prototype = {
  login: function () {
    const apiURL = "http://127.0.0.1:3000/api/users/login";

    fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.data),
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
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
  },
  register: function () {
    const apiURL = "http://127.0.0.1:3000/api/users/register";

    fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.data),
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
  },
};

export { loginModel };
