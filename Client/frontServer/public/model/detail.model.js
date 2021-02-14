function detailModel(data) {
  this.data = data;
}

detailModel.prototype = {
  requestDetailPageData: function (reqDetailData) {
    return fetch("http://127.0.0.1:3000/api/detail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqDetailData),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err));
  },

  isAuth: function () {
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

        console.log("detail 인증 성공");
      })
      .catch((err) => console.log(err));
  },

  addColumn: function (title) {
    const planData = JSON.parse(sessionStorage.getItem("plan"));

    planData.title = title;
    fetch("http://127.0.0.1:3000/api/detail/column/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(planData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  },

  deleteColumn: function (event) {
    const planData = JSON.parse(sessionStorage.getItem("plan"));
    const columnName = $(event.target)
      .parents(".column-header")
      .children("h2")
      .html()
      .trim();

    planData.column = columnName;

    fetch("http://127.0.0.1:3000/api/detail/column/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(planData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  },

  addTask: function (task, event) {
    const taskData = JSON.parse(sessionStorage.getItem("plan"));
    const author = sessionStorage.getItem("User");
    const columnName = $(event.target)
      .closest(".detail-column")
      .find("h2")
      .html()
      .trim();
    taskData.task = task;
    taskData.column = columnName;
    taskData.author = author;

    fetch("http://127.0.0.1:3000/api/detail/task/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  },

  deleteTask: function (event, columnName, taskName) {
    const deletedData = JSON.parse(sessionStorage.getItem("plan"));
    let taskTitle;
    console.log($(event.target).parents());
    if (event.target.className === "detail-column") {
      taskTitle = taskName;
    } else {
      taskTitle = $(event.target).closest(".task").find("span").html();
    }
    console.log(taskTitle);
    deletedData.task = taskTitle;
    deletedData.column = columnName;

    fetch("http://127.0.0.1:3000/api/detail/task/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deletedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  },

  addNewUser: function (user, planData) {
    planData.user = user;

    fetch("http://127.0.0.1:3000/api/detail/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(planData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  },

  changeState: function () {
    const data = JSON.parse(sessionStorage.getItem("plan"));
    if (data.state === "private") {
      data.state = "public";
    } else {
      data.state = "private";
    }
    sessionStorage.setItem("plan", JSON.stringify(data));

    fetch("http://127.0.0.1:3000/api/detail/state/change", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(`${data.state}로 변경 완료`);
      })
      .catch((err) => console.log(err));
  },
};

export { detailModel };
