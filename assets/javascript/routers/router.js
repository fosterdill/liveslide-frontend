LiveSlide.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  initialize: function ($rootEl) {
    this.$rootEl = $rootEl;
    this.relativePath = 'assets/templates/';
  },

  index: function () {
    var renderedContent = 
      new EJS({url: this.relativePath + 'index.ejs'}).render({data: 'index'});
    this.$rootEl.html(renderedContent);
  }
});
