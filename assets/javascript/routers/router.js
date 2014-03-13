LiveSlide.Routers.Router = Backbone.Router.extend({
  routes: {
    'welcome': 'welcome',
    'new': 'create',
    '': 'index'
  },

  initialize: function ($rootEl) {
    this.$rootEl = $rootEl;
    if (window.location.hash != 'welcome') {
      var navbarView = new LiveSlide.Views.Navbar();
      navbarView.render().$el.insertBefore(this.$rootEl);
    }
  },

  welcome: function () {
    var welcomeView = new LiveSlide.Views.Welcome();
    $('.nav-container').hide();
    this._swapView(welcomeView);
  },

  index: function () {
    var indexView = new LiveSlide.Views.Index();
    this._swapView(indexView);
  },

  create: function () {
    var createView = new LiveSlide.Views.Create();
    this._swapView(createView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
    LiveSlide.$rootEl.fadeIn();
  }
});
