(function () {
  const root = document.querySelector(".app-root");

  const routes = {
    // hash: url
    "": "/login", //login\
    register: "/register",
    project: "/project", //select project
    test: "/test",
  };

  const render = async () => {
    try {
      const hash = location.hash.replace("#", "");
      const url = routes[hash];

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

  window.addEventListener("hashchange", render); //hash 바뀔때
  window.addEventListener("DOMContentLoaded", render); //새로고침 일때
})();
