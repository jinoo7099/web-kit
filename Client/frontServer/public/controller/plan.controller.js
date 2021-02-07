function planPage() {
  // 사용자 인증
  fetch("http://127.0.0.1:3000/api/users/auth", {
    method: "POST",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      setPlanPage(data);
    });
}

function setPlanPage(data) {
  if (!data.isAuth) {
    console.log("인증 실패");
    location.href = "/#";
    return;
  }

  fetch("http://127.0.0.1:3000/api/plan", {
    method: "POST",
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      let html = "";

      for (let i = 0; i < data.length; i++) {
        html += `<div class="project">${data[i].name}</div>`;
      }
      $(".app-root").html(`<h2> Prdasdasoject </h2> ${html}`);
    });
}
export { planPage };
