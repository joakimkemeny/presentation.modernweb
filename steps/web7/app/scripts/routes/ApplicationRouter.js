define([
    "jquery",
    "Backbone",
    "ModernWeb",
    "collections/DeliveryOptionCollection",
    "collections/ProductCollection",
    "models/CartModel",
    "models/DeliveryAddressModel",
    "models/PriceModel",
    "views/CartView",
    "views/ConfirmView",
    "views/DeliveryAddressView",
    "views/DeliveryOptionsView",
    "views/ProductsView"
], function ($, Backbone, ModernWeb, DeliveryOptionCollection, ProductCollection, CartModel, DeliveryAddressModel, PriceModel, CartView, ConfirmView, DeliveryAddressView, DeliveryOptionsView, ProductsView) {
    "use strict";

    var ApplicationRouter = Backbone.Router.extend({

        initialize : function () {
            ModernWeb.globalCart = new CartModel();
        },

        listProducts : function (productId) {
            var self = this;

            this.showCart();

            $(".wrapper").addClass("show-products");
            $(".wrapper").removeClass("show-checkout");

            if (this.productsView) {
                if (productId) {
                    var $selected = this.productsView.$el.find("[data-product-id=" + productId + "]");
                    if ($selected.is(":hidden")) {
                        ModernWeb.Util.hideSlide(this.productsView.$el.find("[data-product-id]"));
                        ModernWeb.Util.showSlide($selected);
                    }
                } else {
                    ModernWeb.Util.hideSlide(this.productsView.$el.find("[data-product-id]"));
                }
            } else {
                var products = new ProductCollection();
                products.fetch({
                    success : function (products) {
                        self.productsView = new ProductsView({
                            collection : products
                        });
                    }
                });
            }
        },

        showProduct : function (productId) {
            this.listProducts(productId);
        },

        showCheckout : function () {
            var self = this;

            this.showCart();

            $(".wrapper").removeClass("show-products");
            $(".wrapper").addClass("show-checkout");

            if (!this.deliveryAddressView) {
                this.deliveryAddressView = new DeliveryAddressView({
                    model : new DeliveryAddressModel()
                });
            }

            if (!this.deliveryOptionView) {
                var options = new DeliveryOptionCollection();
                options.fetch({
                    success : function (options) {
                        self.deliveryOptionView = new DeliveryOptionsView({
                            collection : options
                        });
                    }
                });
            }

            if (!this.confirmView) {
                this.confirmView = new ConfirmView();
            }
        },

        showCart : function () {
            if (!this.cartView) {
                this.cartView = new CartView({
                    model : ModernWeb.globalCart
                });
            }
        },

        routes : {
            "" : "listProducts",
            "product" : "listProducts",
            "product/:id" : "showProduct",
            "checkout" : "showCheckout"
        }
    });

    return ApplicationRouter;
});
