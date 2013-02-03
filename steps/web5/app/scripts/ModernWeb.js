define([
    "Backbone",
    "Underscore",
    "framework/Model",
    "framework/Object",
    "framework/Util"
], function (Backbone, _, Model, Object, Util) {
    "use strict";

    var ModernWeb = {};

    ModernWeb.Model = Model;
    ModernWeb.Object = Object;
    ModernWeb.Util = Util;

    return ModernWeb;
});
