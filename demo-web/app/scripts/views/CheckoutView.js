define([
    "jquery",
    "backbone",
    "underscore",
    "models/CartModel",
    "text!templates/Checkout.html"
], function ($, Backbone, _, CartModel, checkoutViewTemplate) {
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
            CartModel.globalCart.save([], {
                success: function () {
                    CartModel.globalCart.emptyCart();
                    Backbone.history.navigate("product", true);
                }
            });
        }
    });

    return CheckoutView;
});
