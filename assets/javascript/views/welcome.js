LiveSlide.Views.Welcome = Backbone.View.extend({
  events: {
    'click a.btn': 'index'
  },

  render: function () {
    var url = this.rootPath + 'welcome.ejs';
    var renderedContent = new EJS({ url: url }).render();
    this.$el.html(renderedContent);
    return this;
  },

  index: function (event) {
    event.preventDefault();
    this.fadeOut('', LiveSlide.$rootEl, true);
  }
});

