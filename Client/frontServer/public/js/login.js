// $(".test").on("click", () => {
//   console.log("button");
// });

document.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "login-btn":
      loginProcess(e);
      break;
  }
});

function loginProcess(e) {
  const id = $(".input-id").val();
  const pwd = $(".input-pwd").val();

  if (id === "" || pwd === "") {
    alert("아이디나 비밀번호를 입력해주세요.");
    return;
  }

  fetch("http://127.0.0.1:3000/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      pwd: pwd,
    }),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

// fetch('/todo/delete', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       name: name,
//       date: date,
//       state: state,
//     }),
//   })
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err));
