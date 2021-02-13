function detailView(elementId) {
  this.el = document.querySelector(`${elementId}`);
}

detailView.prototype = {
  getInitDetailPage: function () {
    return `
        <div class="js-detail-main-container">
          <div class="js-detail-column">
      
          </div>
      
          <div class="js-new-column-container">
           <div class="js-new-column-button">
              <button class="new-column">Add column</button>
           </div>
          </div>

          <div class="js-column-modal">
          
          </div>

        </div>
        
      `;
  },
  displayDetailPage: function (data) {
    this.el.innerHTML = this.getInitDetailPage();
    data.column.forEach((el) => {
      this.addColumn(el.name, this.formatTask(el.task));
    });
  },
  addColumn: function (title, task) {
    const column = `
      <div class='detail-column'>
        <div class="column-header">
          <h2 class="column-title">
            ${title}
          </h2>
          <div class="js-column-button">
            <details class="details-reset">
              <summary>
                menu
              </summary>
              <detail-menu class="dropdown-menu" role="menu">
                <button class="delete-column-button" role="menu"> Delete </button>
                <button class="update-column-button" role="menu"> 사용자 추가 </button>
              </detail>
            </details>
          </div>
        </div>
        
        <div class="column-body">
          <div class="js-new-task">
            <input class="task-name-input" type="text" placeholder="task.." />
            <input class="new-task-button" type="button" value="입력"/>
          </div>

          <div class="js-task">
              ${task}
          </div>
        </div>
      </div>
    `;

    $(".js-detail-column").append(column);
  },
  deleteColumn: function (event) {
    $(event.target).parents(".detail-column").remove();
  },
  addTask: function (task, event) {
    const author = sessionStorage.getItem("User");
    const html = `
    <div class="task" draggable="true" id="${newID()}">

      <div class="task-title">
        <span class="task-name">${task}</span></br>
        <span>Added by ${author}</span>
      </div>

      <div class="js-task-delete-button">
        <i class="task-delete-button fas fa-trash-alt"></i>
      </div>

    </div>`;
    $(event.target).parent().next().append(html);
  },
  formatTask: function (task) {
    let html = "";
    task.forEach(
      (el) =>
        (html += `
    <div class="task" draggable="true" id="${newID()}">

      <div class="task-title">
        <span class="task-name">${el.name}</span></br>
        <span>Added by ${el.author}</span>
      </div>

      <div class="js-task-delete-button">
        <i class="task-delete-button fas fa-trash-alt"></i>
      </div>

    </div>
    `)
    );
    return html;
  },
  deleteTask: function (event) {
    $(event.target).closest(".task").remove();
  },
};

var newID = function () {
  return Math.random().toString(36).substr(2, 16);
};

export { detailView };
