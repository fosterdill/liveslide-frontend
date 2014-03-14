LiveSlide.Views.Navbar = Backbone.View.extend({
  events: {
    'click a#create-button': 'create',
    'click a#search-button': 'index',
    'click a#scrape-button': 'discover'
  },

  render: function () {
    var renderedContent = 
      new EJS({ url: this.rootPath + 'navbar.ejs' }).render();
    this.$el.html(renderedContent);
    return this;
  },
  
  create: function (event) {
    event.preventDefault();
    if (window.location.hash != '#new')
      this.fadeOut('#new', LiveSlide.$rootEl);
  },

  discover: function (event) {
    event.preventDefault();
    if (window.location.hash != '#discover')
      this.fadeOut('#discover', LiveSlide.$rootEl);
  },

  index: function (event) {
    event.preventDefault();
    if (window.location.hash != '')
      this.fadeOut('#', LiveSlide.$rootEl);
  }
});
