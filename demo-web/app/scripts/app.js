define([
    "jquery",
    "backbone",
    "underscore",
    "framework/WebSocket",
    "routes/ApplicationRouter"
], function ($, Backbone, _, webSocket, ApplicationRouter) {
    "use strict";

    var ModernWeb = {};

    ModernWeb.start = function () {

        _.templateSettings = {
            evaluate : /<%([\s\S]+?)%>/g,
            interpolate : /\{\{(.+?)\}\}/g,
            escape : /<%-([\s\S]+?)%>/g
        };

        new ApplicationRouter();
        webSocket.connect();
        Backbone.history.start();
    };


    return ModernWeb;
});
