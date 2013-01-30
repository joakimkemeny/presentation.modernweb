define([
    "jquery",
    "backbone",
    "collections/ProductCollection",
    "models/CartModel",
    "models/DeliveryOptionModel",
    "views/CartView",
    "views/CheckoutView",
    "views/DeliveryView",
    "views/ProductsView"
], function ($, Backbone, ProductCollection, CartModel, DeliveryOptionModel, CartView, CheckoutView, DeliveryView, ProductsView) {
    "use strict";

    var ProductRouter = Backbone.Router.extend({

        listProducts : function (productId) {
            var self = this;

            this.showCart();

            $(".wrapper").addClass("show-products");
            $(".wrapper").removeClass("show-checkout");

            if (this.productsView) {
                $(".products", this.productsView.$el).show();
                if (productId) {
                    var $selected = $(".products [data-product-id=" + productId + "]");
                    if ($selected.is(":hidden")) {
                        hideSlide($(".products [data-product-id]"));
                        showSlide($selected);
                    }
                } else {
                    hideSlide($(".products [data-product-id]"));
                }
            } else {
                this.products = new ProductCollection();
                this.products.fetch({
                    success : function (products) {
                        self.productsView = new ProductsView({
                            collection : products
                        });
                        $(".products", self.productsView.$el).show();
                        if (productId) {
                            showSlide($(".products [data-product-id=" + productId + "]"));
                        }
                    }
                });
            }
        },

        showProduct : function (productId) {
            var self = this;
            this.listProducts(productId);
        },

        showCart : function () {
            if (!this.cartView) {
                this.cartView = new CartView({
                    model : CartModel.globalCart
                });
            }
        },

        showCheckout : function () {

            var self = this;

            this.showCart();

            $(".wrapper").removeClass("show-products");
            $(".wrapper").addClass("show-checkout");

            if (!this.checkoutView) {
                this.checkoutView = new CheckoutView();
            }
        },

        showDeliveryOptions : function () {
            if (!this.deliveryOptionView) {
                this.deliveryOptionView = new DeliveryView();
            }
        },

        routes : {
            "" : "listProducts",
            "product" : "listProducts",
            "product/:id" : "showProduct",
            "checkout" : "showCheckout",
            "deliveryOptions" : "showDeliveryOptions"
        }
    });

    var hideSlide = function (element) {
        element.animate({
            height : "hide"
        }, 400);
    };
    var showSlide = function (element) {
        element.animate({
            height : "show"
        }, 400);
    };

    return ProductRouter;
});
