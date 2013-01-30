define([
    "backbone",
    "collections/CartItemCollection",
    "framework/Model",
    "models/CartItemModel",
    "models/DeliveryAddressModel"
], function (Backbone, CartItemCollection, Model, CartItemModel, DeliveryAddressModel) {
    "use strict";

    var CartModel = Model.extend({
        urlRoot : "/api/order",

        defaults : {
            deliveryAddress : new DeliveryAddressModel(),
            shipmentMethod : null,
            items : new CartItemCollection()
        },

        modelDefinitions : {
            deliveryAddress : DeliveryAddressModel,
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

        emptyCart : function () {
            this.get("deliveryAddress").clear();
            this.get("items").reset();
            this.unset("shipmentMethod");
        },

        getTotal : function () {
            var total = 0;
            this.get("items").each(function (cartItem) {
                total += cartItem.get("quantity") * cartItem.get("price");
            });
            return total;
        }
    });

    CartModel.globalCart = new CartModel();

    return CartModel;
});
