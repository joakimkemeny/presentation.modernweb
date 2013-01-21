(function(){
    "use strict";

    define([
        "jquery",
        "backbone",
        "underscore",
        "modules/customer/CustomerRouter",
        "modules/order/OrderRouter"
    ], function ($, Backbone, _, CustomerRouter, OrderRouter) {

        var ModernWeb = {};

        ModernWeb.start = function () {

            _.templateSettings = {
                evaluate : /<%([\s\S]+?)%>/g,
                interpolate : /\{\{(.+?)\}\}/g,
                escape : /<%-([\s\S]+?)%>/g
            };

            new CustomerRouter();
            new OrderRouter();
            Backbone.history.start();
        }

        return ModernWeb;
    });
})();