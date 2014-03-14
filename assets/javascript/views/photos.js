LiveSlide.Views.Photos = Backbone.View.extend({
  el: $('<div id="photo-area">').addClass('photo-area col-xs-7'),

  render: function () {
    var renderedContent = 
      new EJS({ url: this.rootPath + 'photos.ejs' }).render();
    this.$el.html(renderedContent);
    return this;
  }
});
