define([
    "Backbone",
    "routes/ApplicationRouter"
], function (Backbone, ApplicationRouter) {
    "use strict";

    var App = {};

    App.start = function () {
        new ApplicationRouter();
        Backbone.history.start();
    };

    return App;
});
