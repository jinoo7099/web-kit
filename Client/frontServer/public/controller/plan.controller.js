$(".app-root").on("click", ".project-btn", function (event) {
  event.preventDefault();
  console.log(event.target.innerHTML);
});

$(".app-root").on("click", ".create-btn", function (event) {
  event.preventDefault();
  const planName = $(".input-plan").val();
  if (!planName) {
    alert("이름을 입력해주세요");
    return;
  }
  fetch("http://127.0.0.1:3000/api/plan/create", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: planName }),
  }).then(planPage());
});

$(".app-root").on("click", ".delete-btn", function (event) {
  event.preventDefault();
  // const root = document.querySelector(".app-root");
  // root.removeChild(event.target.parentElement);
  // console.log(event.target.parentElement);

  const name = $(event.target.parentElement).children(".project-btn").html();
  const master = $(event.target.parentElement)
    .children(".plan-span-master")
    .html();

  const deletedPlan = { name: name, master: master };
  $(event.target.parentElement).remove();

  fetch("http://127.0.0.1:3000/api/plan/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(deletedPlan),
  }).then((res) => console.log(res));
});

// Model
// plan 페이지 처음 들어왔을때 api 서버로부터 데이터 받아서 클라이언티에서 뷰
function planPage() {
  // 사용자 인증
  fetch("http://127.0.0.1:3000/api/users/auth", {
    method: "POST",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      renderPlanPage(data);
    });
}

function renderPlanPage(data) {
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
      $(".app-root").html(`<h2> Prdasdasoject </h2>
      <div class="create-input-wrap">
      <input class="input-plan" type="text" name="plan" placeholder="plan">
      </div>
      <button class="create-btn">create</button>`);

      for (let i = 0; i < data.length; i++) {
        $(".app-root").append(`<div class="project">
        <button class="project-btn">${data[i].name}</button>
        <button class="delete-btn">delete</button>
        master : <span class="plan-span-master">${data[i].master}</span>    <span>${data[i].users}</span> <span>${data[i].date}</span> <span>${data[i].state}</span>
        </div>`);
      }
    });
}
export { planPage };
