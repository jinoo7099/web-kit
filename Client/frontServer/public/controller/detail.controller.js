import { detailModel } from "../model/detail.model.js";
import { detailView } from "../view/detail.view.js";

async function renderDetailPage() {
  try {
    const view = new detailView(".app-root");
    const model = new detailModel();

    await model.isAuth();
    const reqPlanData = JSON.parse(sessionStorage.getItem("plan"));
    // sessionStorage.removeItem("plan");
    const data = await model.requestDetailPageData(reqPlanData);
    view.displayDetailPage(data);
  } catch (err) {
    console.log(err);
  }
}

$(".app-root").on("click", ".new-column", function (event) {
  event.preventDefault();
  try {
    const view = new detailView(".app-root");
    const model = new detailModel();
    const title = prompt("이름을 입력해주세요.");

    if (!title) {
      throw new Error("no column name");
    }
    const planData = JSON.parse(sessionStorage.getItem("plan"));
    planData.title = title;

    view.addColumn(title);
    model.addColumn(planData);
  } catch (err) {
    console.log(err);
  }

  // console.log(1);
  // console.log(2);
});

$(".app-root").on("click", ".new-task-button", function (event) {
  try {
    const view = new detailView(".app-root");
    const model = new detailModel();

    const task = $(".task-name-input").val();

    if (!task) {
      throw new Error("no content in input");
    }
  } catch (err) {
    console.log(err);
  }
});

export { renderDetailPage };
