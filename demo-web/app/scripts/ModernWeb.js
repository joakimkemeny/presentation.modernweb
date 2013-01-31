define([
    "Backbone",
    "Underscore",
    "framework/Model",
    "framework/Object",
    "framework/Util",
    "framework/WebSocket"
], function (Backbone, _, Model, Object, Util, WebSocket) {
    "use strict";

    var ModernWeb = {};

    ModernWeb.Model = Model;
    ModernWeb.Object = Object;
    ModernWeb.Util = Util;

    ModernWeb.events = _.clone(Backbone.Events);
    ModernWeb.webSocket = new WebSocket();

    return ModernWeb;
});
