(function(){
    "use strict";

    define([
        "backbone"
    ], function (Backbone) {

        var Customer = {};

        Customer.Model = Backbone.Model.extend({
            defaults : {
                firstName : "",
                lastName : ""
            },
            urlRoot : "http://localhost:8080/api/customer"
        });

        Customer.Collection = Backbone.Collection.extend({
            model : Customer.Model,
            url : "http://localhost:8080/api/customer"
        });

        return Customer;
    });
})();