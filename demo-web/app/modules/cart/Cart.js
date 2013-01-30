define([
    "backbone"
], function (Backbone) {
    "use strict";

    var Cart = {};

    Cart.Model = Backbone.Model.extend({
        urlRoot : "http://local.communityhack.org/api/order",

        defaults : {
            deliveryAddress : {
                name : "",
                address : "",
                postalCode : "",
                city : "",
                email : ""
            },
            shipmentMethod : "",
            products : new Backbone.Collection()
        },

        addToCart : function (product) {
            var newCartItem = new Backbone.Model({
                id : product.id,
                name : product.get("name"),
                price : product.get("price"),
                quantity : product.get("quantity")
            });

            var cartItem = this.get("products").get(newCartItem);
            if (cartItem) {
                cartItem.set("quantity", cartItem.get("quantity") +
                    newCartItem.get("quantity"));
            } else {
                this.get("products").add(newCartItem);
            }
        },

        getTotal : function () {
            var total = 0;
            this.get("products").each(function (cartItem) {
                total += cartItem.get("quantity") * cartItem.get("price");
            });
            return total;
        },

        emptyCart : function () {
            this.set("deliveryAddress", {
                name : "",
                address : "",
                postalCode : "",
                city : "",
                email : ""
            });
            this.set("shipmentMethod", "");
            this.get("products").reset();
        }
    });

    Cart.globalCart = new Cart.Model();

    return Cart;
});
