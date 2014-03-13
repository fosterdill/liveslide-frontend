LiveSlide.Views.Index = Backbone.View.extend({
  events: {
  },

  render: function () {
    //show main layout
    var renderedContent = 
      new EJS({ url: this.rootPath + 'index.ejs' }).render();
    this.$el.html(renderedContent);

    var searchView = new LiveSlide.Views.Search();
    this.$el.find('#search-area').html(searchView.render().$el);

    var photosView = new LiveSlide.Views.Photos();
    this.$el.find('#photo-area').html(photosView.render().$el);

    return this;
  },

});
