define([
    "jquery",
    "backbone",
    "underscore",
    "modules/cart/Cart",
    "text!modules/checkout/CheckoutView.html"
], function ($, Backbone, _, Cart, checkoutViewTemplate) {
    "use strict";

    var CheckoutView = Backbone.View.extend({

        el : "#checkout",

        events : {
            "click button" : "checkout"
        },

        initialize : function () {
            this.template = _.template(checkoutViewTemplate);
            this.render();
        },

        render : function () {
            this.$el.empty();
            this.$el.html(this.template());
        },

        checkout : function (e) {
            Cart.globalCart.save(null, {
                wait: true,
                success: function () {
                    console.log("Success");
                    //Cart.globalCart.emptyCart();
                    Backbone.history.navigate("product", true);
                }
            });
        }
    });

    return CheckoutView;
});
