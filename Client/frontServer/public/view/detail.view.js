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
  displayDetailPage: function () {
    this.el.innerHTML = this.getInitDetailPage();
  },
  addColumn: function (title) {
    const column = `
      <div class='detail-column'>
        <div class="column-header">
          ${title}
        </div>
        <div class="column-body">
        </div>
      </div>
    `;

    $(".js-detail-column").append(column);
  },
};

export { detailView };
