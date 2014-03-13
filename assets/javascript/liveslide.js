window.LiveSlide = {
  Routers: {},
  Views: {},
  Collections: {},
  Models: {},
  initialize: function ($rootEl) {
    new LiveSlide.Routers.Router($rootEl);
    Backbone.history.start();
  }
}

$(document).ready(function () {
  var $rootEl = $('#content');
  LiveSlide.initialize($rootEl);
});
