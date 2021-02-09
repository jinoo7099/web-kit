import { detailPage } from "./detail.controller.js";

$(".app-root").on("click", ".plan-btn", function (event) {
  event.preventDefault();
  const planName = $(event.target.parentElement).children(".plan-btn").html();
  const master = $(event.target.parentElement.parentElement)
    .children(".plan-description")
    .children(".plan-span-master")
    .html();

  const data = { name: planName, master: master };

  sessionStorage.setItem("plan", JSON.stringify(data));
  location.href = "/#detail";
  // detailPage(planName, master);
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
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success === false) {
        throw new Error("failed plan create");
      }

      planPage();
    })
    .catch(console.log);
});

$(".app-root").on("click", ".delete-btn", function (event) {
  event.preventDefault();
  const deletedPlan = getDeletedPlan(event);
  $(event.target.parentElement).remove();

  fetch("http://127.0.0.1:3000/api/plan/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(deletedPlan),
  }).then((res) => console.log(res));
});

function getDeletedPlan(event) {
  console.log(event.target.parentElement);
  const name = $(event.target.parentElement)
    .children(".plan-title")
    .children(".plan-btn")
    .html();

  const master = $(event.target.parentElement)
    .children(".plan-description")
    .children(".plan-span-master")
    .html();

  const deletedPlan = { name: name, master: master };
  console.log(deletedPlan);
  return deletedPlan;
}

function planPage() {
  // 사용자 인증
  fetch("http://127.0.0.1:3000/api/users/auth", {
    method: "POST",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      if (!data.isAuth) {
        location.href = "/#";
        throw new Error("인증 실패");
      }

      requestPlanPageData(data);
    })
    .catch((err) => console.log(err));
}

function requestPlanPageData(data) {
  fetch("http://127.0.0.1:3000/api/plan", {
    method: "POST",
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      renderPlanPage(data);
    })
    .catch((err) => console.log(err));
}

//view
function renderPlanPage(data) {
  $(".app-root").html(`
    <header class="plan-header">
      <h2 class="plan-header-title"> Select Plan </h2>
      <div class="create-input-wrap">
        <input class="input-plan" type="text" name="plan" placeholder="plan">
      </div>
      <button class="create-btn">create</button>
    </header>
    <section class="plan-main-container">
      <div class="plan-results-container">

      </div>
    </section>
    `);

  for (let i = 0; i < data.length; i++) {
    $(".plan-results-container").append(`
    <div class="plan-result">
      <h5 class="plan-title">
        <button class="plan-btn">${data[i].name}</button>
        <div class="plan-date">
          <span>생성일 : ${getFormatDate(data[i].date)}</span>
        </div>
      </h5>
      <div class="plan-description">
      master :  <span class="plan-span-master">${data[i].master}</span>
        <p>users : ${data[i].users} </p> 
        <p>${data[i].state} </p>
      </div>
      <button class="delete-btn">delete</button>
    </div>
    `);
  }
}

function getFormatDate(date) {
  let formatDate = "";
  console.log(date);
  formatDate += date.slice(0, 10);
  formatDate += " ";
  formatDate += date.slice(11, 19);
  return formatDate;
}

export { planPage };
