define([
    "Backbone",
    "ModernWeb",
    "routes/ApplicationRouter"
], function (Backbone, ModernWeb, ApplicationRouter) {
    "use strict";

    var App = {};

    App.start = function () {
        new ApplicationRouter();
        ModernWeb.webSocket.connect();
        Backbone.history.start();
    };

    return App;
});
