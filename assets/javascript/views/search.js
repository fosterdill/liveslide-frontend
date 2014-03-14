LiveSlide.Views.Search = Backbone.View.extend({
  el: $('<div id="search-area">').addClass('col-xs-3 col-xs-offset-1'),

  render: function () {
    var renderedContent = new EJS({ url: this.rootPath + 'search.ejs' }).render();
    this.$el.html(renderedContent);
    return this;
  }
});
