LiveSlide.Views.Search = Backbone.View.extend({
  render: function () {
    var renderedContent = new EJS({ url: this.rootPath + 'search.ejs' }).render();
    this.$el.html(renderedContent);
    return this;
  }
});
