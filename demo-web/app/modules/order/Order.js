(function(){
    "use strict";

    define([
        "backbone"
    ], function (Backbone) {

        var Order = {};

        Order.Model = Backbone.Model.extend({
            defaults : {
                customer : "",
                quantity : ""
            },
            urlRoot : "http://localhost:8080/api/order"
        });

        Order.Collection = Backbone.Collection.extend({
            model : Order.Model,
            url : "http://localhost:8080/api/order"
        });

        return Order;
    });
})();