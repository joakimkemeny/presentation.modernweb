define([
    "Backbone",
    "ModernWeb",
    "collections/ProductCollection",
    "views/ProductsView"
], function (Backbone, ModernWeb, ProductCollection, ProductsView) {
    "use strict";

    var ApplicationRouter = Backbone.Router.extend({

        listProducts : function (productId) {
            var self = this;

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
                })
            }
        },

        showProduct : function (productId) {
            this.listProducts(productId);
        },

        showCheckout : function () {
            console.log("Checkout");
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
