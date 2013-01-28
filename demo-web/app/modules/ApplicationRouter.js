define([
    "jquery",
    "backbone",
    "modules/cart/Cart",
    "modules/cart/CartView",
    "modules/checkout/CheckoutView",
    "modules/product/Product",
    "modules/product/ProductsView"
], function ($, Backbone, Cart, CartView, CheckoutView, Product, ProductsView) {
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
                this.products = new Product.Collection();
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
                    collection : Cart.globalCart
                });
            }
        },

        showCheckout: function () {

            var self = this;

            this.showCart();

            $(".wrapper").removeClass("show-products");
            $(".wrapper").addClass("show-checkout");

            if (!this.checkoutView) {
                this.checkoutView = new CheckoutView();
            }
        },

        routes : {
            "" : "listProducts",
            "product" : "listProducts",
            "product/:id" : "showProduct",
            "checkout" : "showCheckout"
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

    var slideLeft = function (element) {
        element.animate({
            left : "-=200",
            opacity : 0
        }, 400);
    };

    return ProductRouter;
});
