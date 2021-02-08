import { planPage } from "../controller/plan.controller.js";
import { loginPage } from "../controller/login.controller.js";
import { detailPage } from "../controller/detail.controller.js";
const routes = {
  // hash: url
  "": "/login", //login
  plan: "/plan", //select project
  detail: "/detail", //상세 페이지
};

const render = () => {
  try {
    const hash = location.hash.replace("#", "");
    const url = routes[hash];

    switch (url) {
      case "/login":
        loginPage();
        break;
      case "/plan":
        planPage();
        break;
    }
  } catch (err) {
    console.error(err);
  }
};

window.addEventListener("hashchange", render); //hash 바뀔때
window.addEventListener("DOMContentLoaded", render); //새로고침 일때
// })();
