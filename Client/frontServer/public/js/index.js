// import { planPage } from "../controller/plan.controller.js";
// import { loginPage } from "../controller/login.controller.js";
import { renderDetailPage } from "../controller/detail.controller.js";
import { renderLoginPage } from "../controller/login.controller.js";
import { renderPlanPage } from "../controller/plan.controller.js";
const routes = {
  // hash: url
  "": "/login", //login
  plan: "/plan", //select project
  detail: "/detail", //상세 페이지
};

const render = (event) => {
  try {
    const hash = location.hash.replace("#", "");
    const url = routes[hash];
    switch (url) {
      case "/login":
        // loginPage();
        renderLoginPage();
        break;
      case "/plan":
        renderPlanPage();
        break;
      case "/detail":
        renderDetailPage();
        break;
    }
  } catch (err) {
    console.error(err);
  }
};

window.addEventListener("hashchange", render); //hash 바뀔때
window.addEventListener("DOMContentLoaded", render); //새로고침 일때

// })();
