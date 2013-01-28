define([
    "backbone",
    "underscore",
    "modules/cart/Cart",
    "text!modules/cart/CartItemView.html"
], function (Backbone, _, Cart, cartItemTemplate) {
    "use strict";

    var CartItemView = Backbone.View.extend({

        tagName : "li",

        events : {
            "click .icon-trash" : "removeFromCart"
        },

        initialize : function () {
            this.template = _.template(cartItemTemplate);
            this.render();
        },

        render : function () {
            this.$el.empty();
            this.$el.html(this.template(this.model.toJSON()));
        },

        removeFromCart : function () {
            Cart.globalCart.remove(this.model);
        }
    });

    return CartItemView;
});
