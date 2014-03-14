LiveSlide.Views.Index = Backbone.View.extend({
  events: {
  },

  el: $('<div>').addClass('index-el'),

  render: function () {
    //show main layout
    var renderedContent = 
      new EJS({ url: this.rootPath + 'index.ejs' }).render();
    this.$el.html(renderedContent);
    var indexContainer = this.$el.find('.index-container');

    var searchView = new LiveSlide.Views.Search();
    var photosView = new LiveSlide.Views.Photos();

    indexContainer.append(searchView.render().$el);
    indexContainer.append(photosView.render().$el);

    return this;
  },

});
