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

    view.addColumn(title, "");
    model.addColumn(title);
  } catch (err) {
    console.log(err);
  }
});

$(".app-root").on("click", ".delete-column-button", function (event) {
  event.preventDefault();
  const view = new detailView(".app-root");
  const model = new detailModel();

  view.deleteColumn(event);
  model.deleteColumn(event);
});

$(".app-root").on("click", ".update-column-button", function (event) {
  event.preventDefault();
  const model = new detailModel();

  const newUser = prompt("추가할 유저를 입력해주세요.");
  model.addNewUser(newUser);
});
$(".app-root").on("click", ".new-task-button", function (event) {
  event.preventDefault();
  const view = new detailView(".app-root");
  const model = new detailModel();
  const task = $(event.target).prev().val();

  if (!task) {
    alert("no content in input");
    throw new Error("no content in input");
  }

  view.addTask(task, event);
  model.addTask(task, event);
});

$(".app-root").on("click", ".task-delete-button", function (event) {
  event.preventDefault();
  const view = new detailView(".app-root");
  const model = new detailModel();

  view.deleteTask(event);
  model.deleteTask(event);
});

document.addEventListener("dragstart", (ev) => {
  ev.dataTransfer.setData("text", ev.target.id);
});

document.addEventListener("dragover", (ev) => {
  ev.preventDefault();
});

document.addEventListener("drop", (ev) => {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
});
export { renderDetailPage };
