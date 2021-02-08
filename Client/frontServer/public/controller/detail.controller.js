function detailPage(plan, master) {
  const reqPlanData = { name: plan, master: master };
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
  $(".app-root").html(`<section class="detail-main-container">
  <div class="detail-column">

  </div>

  <div class="new-column-container">
    <div class="new-column-button">
      <button class="new-column">Add column</button>
    </div>
  </div>
</section>`);
}

export { detailPage };
