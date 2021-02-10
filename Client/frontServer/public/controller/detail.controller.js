import { detailModel } from "../model/detail.model.js";
import { detailView } from "../view/detail.view.js";

async function renderDetailPage() {
  try {
    const view = new detailView(".app-root");
    const model = new detailModel();

    await model.isAuth();
    const reqPlanData = JSON.parse(sessionStorage.getItem("plan"));
    sessionStorage.removeItem("plan");
    const data = await model.requestDetailPageData(reqPlanData);
    view.displayDetailPage(data);
  } catch (err) {
    console.log(err);
  }
}

$(".app-root").on("click", ".new-column", function (event) {
  event.preventDefault();
  const view = new detailView(".app-root");
  const title = prompt("이름을 입력해주세요.");
  console.log(title);
  view.addColumn(title);
});

export { renderDetailPage };
