define([
    "Backbone",
    "Underscore",
    "ModernWeb",
    "models/CartModel",
    "text!templates/CartItem.html"
], function (Backbone, _, ModernWeb, CartModel, cartItemTemplate) {
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
            ModernWeb.globalCart.removeFromCart(this.model);
        }
    });

    return CartItemView;
});
