LiveSlide.Views.Photos = Backbone.View.extend({
  render: function () {
    var renderedContent = 
      new EJS({ url: this.rootPath + 'photos.ejs' }).render();
    this.$el.html(renderedContent);
    return this;
  }
});
