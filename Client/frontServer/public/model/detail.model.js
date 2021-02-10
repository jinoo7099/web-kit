function detailModel(data) {
  this.data = data;
}

detailModel.prototype = {
  requestDetailPageData: function (reqPlanData) {
    return fetch("http://127.0.0.1:3000/api/detail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqPlanData),
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
};

export { detailModel };
