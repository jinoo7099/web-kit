import { planView } from "../view/plan.view.js";
import { planModel } from "./plan.model.js";

function renderPlanPage() {
  try {
    const view = new planView(".app-root");
    const model = new planModel();

    model.requestPlanPageData(view.displayPlanPage.bind(view));
  } catch (error) {
    console.error(error);
  }
}

$(".app-root").on("click", ".plan-btn", function (event) {
  event.preventDefault();
  const view = new planView(".app-root");
  const data = view.getPlanNameAndMaster(event);

  sessionStorage.setItem("plan", JSON.stringify(data));
  location.href = "/#detail";
  // detailPage(planName, master);
});

$(".app-root").on("click", ".create-btn", function (event) {
  event.preventDefault();
  try {
    const model = new planModel();
    const view = new planView(".app-root");

    const planName = view.getCreateInputData();
    model.createPlan(planName, view.displayPlanPage.bind(view));
  } catch (error) {
    console.error(error);
  }
});

$(".app-root").on("click", ".delete-btn", function (event) {
  event.preventDefault();
  const view = new planView(".app-root");
  const model = new planModel();
  const deletedPlan = view.getDeletedPlan(event);

  model.deletePlan(deletedPlan);
});

export { renderPlanPage };
