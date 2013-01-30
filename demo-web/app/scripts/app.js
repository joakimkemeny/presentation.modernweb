define([
    "backbone",
    "underscore",
    "routes/ApplicationRouter"
], function (Backbone, _, ApplicationRouter) {
    "use strict";

    var App = {};

    App.start = function () {
        new ApplicationRouter();
        Backbone.history.start();
    };


    return App;
});
