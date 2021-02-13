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
      this.appendPlan(data[i]);
    }
  },

  displayPlanPage: function (data) {
    this.el.innerHTML = this.getInitPlanPage();
    this.setPlan(data);
  },

  getPlan: function (event) {
    const planName = $(event.target.parentElement).children(".plan-btn").html();
    const master = $(event.target.parentElement.parentElement)
      .children(".plan-description")
      .children(".plan-span-master")
      .html();
    const state = $(event.target.parentElement.parentElement)
      .find(".plan-state")
      .text()
      .trim();
    const t = $(event.target).parents();
    console.log(t);
    const id = $(event.target).parents(".plan-result").attr("id");

    const data = { _id: id, name: planName, master: master, state: state };
    return data;
  },

  getDeletedPlan: function (event) {
    const id = $(event.target).closest(".plan-result").attr("id");

    const deletedPlan = { _id: id };

    return deletedPlan;
  },
  deletePlan: function (event) {
    $(event.target.parentElement).remove();
  },
  getCreateInputData: function () {
    const planName = $(".input-plan").val();
    if (!planName) {
      alert("이름을 입력해주세요");
      throw new Error("name miss");
    }
    return planName;
  },

  appendPlan: function (data) {
    $(".plan-results-container").append(`
    <div class="plan-result" id="${data._id}">
      <h5 class="plan-title">
        <button class="plan-btn">${data.name}</button>
        <div class="plan-date">
          <span>생성일 : ${getFormatDate(data.date)}</span>
        </div>
      </h5>
      <div class="plan-description">
      master :  <span class="plan-span-master">${data.master}</span>
        <p>users : ${data.users} </p> 
        <p class="plan-state">${data.state} </p>
      </div>
      <button class="delete-btn">delete</button>
    </div>
    `);
  },
};

function getFormatDate(date) {
  let formatDate = "";
  formatDate += date.slice(0, 10);
  formatDate += " ";
  formatDate += date.slice(11, 19);
  return formatDate;
}

export { planView };
