define([
    "Backbone"
], function (Backbone) {
    "use strict";

    var ApplicationRouter = Backbone.Router.extend({

        listProducts : function () {
            console.log("Listing products");
        },

        showProduct : function (id) {
            console.log("Showing product " + id);
        },

        showCheckout : function () {
            console.log("Checkout");
        },

        routes : {
            "" : "listProducts",
            "product" : "listProducts",
            "product/:id" : "showProduct",
            "checkout" : "showCheckout"
        }
    });

    return ApplicationRouter;
});
