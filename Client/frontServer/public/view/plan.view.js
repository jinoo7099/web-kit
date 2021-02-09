function planView(elementId) {
  this.el = document.querySelector(`${elementId}`);
}

planView.prototype = {
  getInitPlanPage: function () {
    return `
        <header class="plan-header">
          <h2 class="plan-header-title"> Select Plan </h2>
          <div class="create-input-wrap">
            <input class="input-plan" type="text" name="plan" placeholder="plan">
          </div>
          <button class="create-btn">create</button>
        </header>
        <section class="plan-main-container">
          <div class="plan-results-container">
    
          </div>
        </section>
        `;
  },

  setPlan: function (data) {
    for (let i = 0; i < data.length; i++) {
      $(".plan-results-container").append(`
          <div class="plan-result">
            <h5 class="plan-title">
              <button class="plan-btn">${data[i].name}</button>
              <div class="plan-date">
                <span>생성일 : ${getFormatDate(data[i].date)}</span>
              </div>
            </h5>
            <div class="plan-description">
            master :  <span class="plan-span-master">${data[i].master}</span>
              <p>users : ${data[i].users} </p> 
              <p>${data[i].state} </p>
            </div>
            <button class="delete-btn">delete</button>
          </div>
          `);
    }
  },

  displayPlanPage: function (data) {
    this.el.innerHTML = this.getInitPlanPage();
    this.setPlan(data);
  },

  getPlanNameAndMaster: function (event) {
    const planName = $(event.target.parentElement).children(".plan-btn").html();
    const master = $(event.target.parentElement.parentElement)
      .children(".plan-description")
      .children(".plan-span-master")
      .html();

    const data = { name: planName, master: master };
    return data;
  },

  getDeletedPlan: function (event) {
    const name = $(event.target.parentElement)
      .children(".plan-title")
      .children(".plan-btn")
      .html();

    const master = $(event.target.parentElement)
      .children(".plan-description")
      .children(".plan-span-master")
      .html();

    const deletedPlan = { name: name, master: master };
    $(event.target.parentElement).remove();

    return deletedPlan;
  },

  getCreateInputData: function () {
    const planName = $(".input-plan").val();
    if (!planName) {
      alert("이름을 입력해주세요");
      throw new Error("name miss");
    }
    return planName;
  },

  appendPlan: function () {
    $(".plan-results-container").append(`
    <div class="plan-result">
      <h5 class="plan-title">
        <button class="plan-btn">${planName}</button>
        <div class="plan-date">
          <span>생성일 : sdfdf</span>
        </div>
      </h5>
      <div class="plan-description">
      master :  <span class="plan-span-master">asdf</span>
        <p>users : asd </p> 
        <p>private </p>
      </div>
      <button class="delete-btn">delete</button>
    </div>
    `);
  },
};

function getFormatDate(date) {
  let formatDate = "";
  console.log(date);
  formatDate += date.slice(0, 10);
  formatDate += " ";
  formatDate += date.slice(11, 19);
  return formatDate;
}

export { planView };
