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
    data.column.forEach((el) => this.addColumn(el.name));
  },
  addColumn: function (title) {
    const column = `
      <div class='detail-column'>
        <div class="column-header">
          ${title}
        </div>
        <div class="column-body">
          <div class="js-new-task">
            <input class="task-name-input" type="text" placeholder="task.." />
            <input class="new-task-button" type="button" value="입력"/>
          </div>

          <div class="js-task">

          </div>
        </div>
      </div>
    `;

    $(".js-detail-column").append(column);
  },
};

export { detailView };
