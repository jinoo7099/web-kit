import { loginView } from "../view/login.view.js";
import { loginModel } from "../model/login.model.js";

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
  const view = new loginView(".app-root");
  const data = view.getIdAndPwd();

  const model = new loginModel(data);
  model.login();
}

function registerProcess() {
  const view = new loginView(".app-root");
  const data = view.getIdAndPwd();

  const model = new loginModel(data);
  model.register();
}

function renderLoginPage() {
  const view = new loginView(".app-root");

  view.displayLoginPage();
}

export { renderLoginPage };
