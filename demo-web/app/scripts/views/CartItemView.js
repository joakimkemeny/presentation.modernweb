define([
    "backbone",
    "underscore",
    "models/CartModel",
    "text!templates/CartItem.html"
], function (Backbone, _, CartModel, cartItemTemplate) {
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
            CartModel.globalCart.removeFromCart(this.model);
        }
    });

    return CartItemView;
});
