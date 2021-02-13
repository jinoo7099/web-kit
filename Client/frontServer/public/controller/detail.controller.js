import { detailModel } from "../model/detail.model.js";
import { detailView } from "../view/detail.view.js";

async function renderDetailPage() {
  try {
    const view = new detailView(".app-root");
    const model = new detailModel();

    await model.isAuth();
    const reqPlanData = JSON.parse(sessionStorage.getItem("plan"));
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

    view.addColumn(title);
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

////////////////

$(".app-root").on("click", ".update-user-button", function (event) {
  event.preventDefault();
  const model = new detailModel();

  const planData = JSON.parse(sessionStorage.getItem("plan"));

  if (planData.state === "private") {
    alert("private이므로 사용자 추가 안됨");
    return;
  }

  const newUser = prompt("추가할 유저를 입력해주세요.");
  model.addNewUser(newUser, planData);
});

$(".app-root").on("click", ".update-state-button", function (ev) {
  const model = new detailModel();

  model.changeState();
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

  const columnName = $(event.target)
    .closest(".detail-column")
    .find("h2")
    .html()
    .trim(); // 그래서 함수 밖에서 인수로 넘겨줌

  view.deleteTask(event);
  model.deleteTask(event, columnName); // 왜 안에서는 event.parents()가 3개 밖에 안뜰가?
});

document.addEventListener("dragstart", (ev) => {
  const columnName = $(ev.target)
    .closest(".detail-column")
    .find("h2")
    .html()
    .trim();
  ev.dataTransfer.setData(
    "text",
    JSON.stringify({ id: ev.target.id, column: columnName })
  );
});

document.addEventListener("dragover", (ev) => {
  ev.preventDefault();
});

document.addEventListener("drop", (ev) => {
  ev.preventDefault();
  const data = JSON.parse(ev.dataTransfer.getData("text"));
  const node = document.getElementById(data.id);
  ev.target.children[1].children[1].appendChild(node);

  const model = new detailModel();
  const taskName = node.children[0].children[0].innerHTML;
  const columnName = data.column;
  model.addTask(taskName, ev);
  model.deleteTask(ev, columnName, taskName);
});

export { renderDetailPage };
