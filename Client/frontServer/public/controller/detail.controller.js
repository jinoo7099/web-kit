function detailPage() {
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
      const reqPlanData = JSON.parse(sessionStorage.getItem("plan"));
      sessionStorage.removeItem("plan");
      requestDetailPageData(reqPlanData);
    })
    .catch((err) => console.log(err));
}

function requestDetailPageData(reqPlanData) {
  fetch("http://127.0.0.1:3000/api/detail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqPlanData),
  })
    .then((res) => res.json())
    .then((data) => {
      renderDetailPage(data);
    })
    .catch((err) => console.log(err));
}

function renderDetailPage(resPlanData) {
  console.log(resPlanData);
  $(".app-root").html(`
  <section class="js-detail-main-container">
    <div class="js-detail-column">

    </div>

    <div class="js-new-column-container">
     <div class="js-new-column-button">
        <button class="new-column">Add column</button>
     </div>
    </div>
  </section>
  <div class="js-column-modal">
    <div class="Box-header">
        <h2>modal 창</h2>
    </div>
    <div> class="Box-body">
        
    </div>
  </div>
`);
}

// $(".app-root").on("click", ".create-btn", function (event) {
//   fetch("http://127.0.0.1:3000/api/plan/create", {
//     method: "POST",
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name: planName }),
//   }).then(planPage());
// });

export { detailPage };
