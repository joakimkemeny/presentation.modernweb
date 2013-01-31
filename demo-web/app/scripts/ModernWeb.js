define([
    "Backbone",
    "Underscore",
    "framework/Model",
    "framework/Object",
    "framework/WebSocket"
], function (Backbone, _, Model, Object, WebSocket) {
    "use strict";

    var ModernWeb = {};

    ModernWeb.Model = Model;
    ModernWeb.Object = Object;

    ModernWeb.events = _.clone(Backbone.Events);
    ModernWeb.webSocket = new WebSocket();

    return ModernWeb;
});
