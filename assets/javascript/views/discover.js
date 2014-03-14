LiveSlide.Views.Discover = Backbone.View.extend({
  render: function () {
    var renderedContent = 
      new EJS({ url: this.rootPath + 'discover.ejs' }).render();
    this.$el.html(renderedContent);
    return this;
  }
});
