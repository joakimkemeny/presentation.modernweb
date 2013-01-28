define([
    "jquery",
    "backbone",
    "underscore",
    "modules/ApplicationRouter"
], function ($, Backbone, _, ApplicationRouter) {
    "use strict";

    var ModernWeb = {};

    ModernWeb.start = function () {

        _.templateSettings = {
            evaluate : /<%([\s\S]+?)%>/g,
            interpolate : /\{\{(.+?)\}\}/g,
            escape : /<%-([\s\S]+?)%>/g
        };

        new ApplicationRouter();
        Backbone.history.start();
    };

    return ModernWeb;
});
