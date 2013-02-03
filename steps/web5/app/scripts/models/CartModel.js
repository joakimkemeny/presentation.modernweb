define([
    "Backbone",
    "ModernWeb",
    "collections/CartItemCollection",
    "models/CartItemModel"
], function (Backbone, ModernWeb, CartItemCollection, CartItemModel) {
    "use strict";

    var CartModel = ModernWeb.Model.extend({
        urlRoot : "/api/order",

        defaults : {
            items : new CartItemCollection()
        },

        modelDefinitions : {
            items : CartItemCollection
        },

        addToCart : function (item) {
            var newCartItem = new CartItemModel({
                id : item.id,
                name : item.get("name"),
                price : item.get("price"),
                quantity : item.get("quantity")
            });

            var cartItem = this.get("items").get(newCartItem);
            if (cartItem) {
                cartItem.set("quantity", cartItem.get("quantity") + newCartItem.get("quantity"));
            } else {
                this.get("items").add(newCartItem);
            }
        },

        removeFromCart : function (item) {
            var cartItem = this.get("items").get(item.id);
            if (cartItem) {
                this.get("items").remove(cartItem);
            }
        },

        getTotal : function () {
            var total = 0;
            this.get("items").each(function (cartItem) {
                total += cartItem.get("quantity") * cartItem.get("price");
            });
            return total;
        }
    });

    return CartModel;
});
