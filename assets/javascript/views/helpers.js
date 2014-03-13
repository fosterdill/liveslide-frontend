(function (root) {
  _.extend(root.Backbone.View.prototype, {

    rootPath: 'assets/templates/',

    fadeOut: function (path, $el, renderNav) {
      $($el).fadeOut(300, function () {
        Backbone.history.navigate(path, { trigger: true });
        if (renderNav) {
          var navbarView = new LiveSlide.Views.Navbar();
          navbarView.render().$el.insertBefore(LiveSlide.$rootEl);
        }
      });
    }
  });
})(this);
