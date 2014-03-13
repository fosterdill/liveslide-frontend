LiveSlide.Views.Create = Backbone.View.extend({
  render: function () {
    var renderedContent = 
      new EJS({ url: this.rootPath + 'create.ejs' }).render();
    this.$el.html(renderedContent);
    return this;
  }
});
