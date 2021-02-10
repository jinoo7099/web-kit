function planModel(data) {
  this.data = data;
}

planModel.prototype = {
  isAuth: function () {
    return fetch("http://127.0.0.1:3000/api/users/auth", {
      method: "POST",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.isAuth) {
          location.href = "/#";
          throw new Error("인증 실패");
        }

        console.log("plan 인증 성공");
      })
      .catch((err) => console.log(err));
  },

  requestPlanPageData: function () {
    return fetch("http://127.0.0.1:3000/api/plan", {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err));
  },

  deletePlan: function (deletedPlan) {
    fetch("http://127.0.0.1:3000/api/plan/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deletedPlan),
    }).then((res) => console.log(res));
  },
  createPlan: function (planName, cb) {
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
        this.requestPlanPageData(cb);
      })
      .catch(console.log);
  },
};

export { planModel };
