import { planView } from "../view/plan.view.js";
import { planModel } from "../model/plan.model.js";

async function renderPlanPage() {
  try {
    const view = new planView(".app-root");
    const model = new planModel();
    await model.isAuth(); // 페이지 접속 전 인증
    const data = await model.requestPlanPageData();

    data.forEach((el) => {
      sessionStorage.setItem(`${el._id}`, JSON.stringify(el));
    });

    view.displayPlanPage(data);
  } catch (error) {
    console.error(error);
  }
}

$(".app-root").on("click", ".plan-btn", function (event) {
  event.preventDefault();
  const view = new planView(".app-root");
  const data = view.getPlanNameAndMaster(event);

  sessionStorage.setItem(`plan`, JSON.stringify(data));
  location.href = "/#detail";
  // detailPage(planName, master);
});

$(".app-root").on("click", ".create-btn", async function (event) {
  event.preventDefault();

  try {
    const model = new planModel();
    const view = new planView(".app-root");

    const planName = view.getCreateInputData();
    // view.appendPlan(planName);
    const data = await model.createPlan(planName);
    view.appendPlan(data);
  } catch (error) {
    console.error(error);
  }
});

$(".app-root").on("click", ".delete-btn", function (event) {
  event.preventDefault();
  const view = new planView(".app-root");
  const model = new planModel();
  const deletedPlan = view.getDeletedPlan(event);
  view.deletePlan(event);
  model.deletePlan(deletedPlan);
});

export { renderPlanPage };
