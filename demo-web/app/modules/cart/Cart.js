define([
    "backbone"
], function (Backbone) {
    "use strict";

    var Cart = {};

    Cart.Model = Backbone.Model.extend({

        initialize : function (options) {
            this.id = options.product.id;
            this.set("name", options.product.get("name"));
            this.set("price", options.product.get("price"));
            this.set("quantity", options.product.get("quantity"));
        }
    });

    Cart.Collection = Backbone.Collection.extend({
        url : "http://localhost:8080/api/order",
        model : Cart.Model,

        addToCart : function (newCartItem) {
            var cartItem = this.get(newCartItem);
            if (cartItem) {
                cartItem.set("quantity", cartItem.get("quantity") +
                    newCartItem.get("quantity"));
            } else {
                this.add(newCartItem);
            }
        },

        getTotal : function () {
            var total = 0;
            this.each(function (cartItem) {
                total += cartItem.get("quantity") * cartItem.get("price");
            });
            return total;
        }
    });

    Cart.globalCart = new Cart.Collection();

    return Cart;
});
