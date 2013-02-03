define([
    "Backbone",
    "ModernWeb",
    "collections/CartItemCollection",
    "models/CartItemModel",
    "models/DeliveryAddressModel",
    "models/PriceModel"
], function (Backbone, ModernWeb, CartItemCollection, CartItemModel, DeliveryAddressModel, PriceModel) {
    "use strict";

    var CartModel = ModernWeb.Model.extend({
        urlRoot : "/api/order",

        defaults : {
            deliveryAddress : null,
            items : new CartItemCollection(),
            shipmentMethod : null,
            shipmentPrice : null
        },

        modelDefinitions : {
            deliveryAddress : DeliveryAddressModel,
            items : CartItemCollection,
            shipmentPrice : PriceModel
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

        emptyCart : function () {
            this.id = null;
            this.get("items").reset();
            this.set("deliveryAddress", null);
            this.set("shipmentMethod", null);
            this.set("shipmentPrice", null);
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
        },

        getTotalWithShipment : function () {
            var total = this.getTotal();
            var shipmentPrice = this.shipmentPrice;
            if (shipmentPrice) {
                total += shipmentPrice.get("amount") / 100;
            }
            return total;
        }
    });

    return CartModel;
});
