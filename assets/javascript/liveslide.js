(function (root) {
  var welcomeFilter = function (callback) {
    if ($.cookie('visitedBefore') != 'true') {
      root.location.hash = 'welcome';
      $.cookie('visitedBefore', 'true');
    }
    callback();
  };

  root.LiveSlide = {
    Routers: {},
    Views: {},
    Collections: {},
    Models: {},
    initialize: function ($rootEl) {
      LiveSlide.$rootEl = $rootEl;
      welcomeFilter(function () {
        new LiveSlide.Routers.Router($rootEl);
        Backbone.history.start();
      });
    }
  }

  $(document).ready(function () {
    var $rootEl = $('#content');
    LiveSlide.initialize($rootEl);
  });
})(this);
