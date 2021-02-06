// (function () {
const routes = {
  // hash: url
  "": "/login", //login
  project: "/project", //select project
};

const render = () => {
  try {
    const root = document.querySelector(".app-root");

    const hash = location.hash.replace("#", "");
    const url = routes[hash];
    if (url === "/login") {
      root.innerHTML = loginPage();
    } else if (url === "/project") {
      root.innerHTML = proejctPage();
    }
    //   const res = await fetch(url);
    //   const contentType = res.headers.get("content-type");

    //   if (contentType?.includes("application/json")) {
    //     const json = await res.json();
    //     root.innerHTML = `<h1>${json.title}</h1><p>${json.content}</p>`;
    //   } else {
    //     root.innerHTML = await res.text();
    //   }
  } catch (err) {
    console.error(err);
  }
};

function loginPage() {
  return `<h1>로그인</h1>
              <div class="login-input-wrap">
                  <input class="input-id" type="text" name="id" placeholder="email">
              </div>
  
              <div class="login-input-wrap password-wrap">
                  <input class="input-pwd" type="password" name="pw" placeholder="password">
              </div>
  
              <div class="login-button-wrap">
                  <button class="login-btn">login</button>
              </div>

              `;
}

function proejctPage() {
  return `<h2>Project</h2>`;
}

window.addEventListener("hashchange", render); //hash 바뀔때
window.addEventListener("DOMContentLoaded", render); //새로고침 일때
// })();
