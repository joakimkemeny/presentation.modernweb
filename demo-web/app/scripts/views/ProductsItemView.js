define([
    "jquery",
    "Backbone",
    "Underscore",
    "ModernWeb",
    "models/CartModel",
    "text!templates/ProductsItem.html"
], function ($, Backbone, _, ModernWeb, CartModel, productsItemTemplate) {
    "use strict";

    var ProductsItemView = Backbone.View.extend({

        tagName : "li",

        events : {
            "click button" : "addToCart",
            "click" : "showProduct"
        },

        initialize : function () {
            this.template = _.template(productsItemTemplate);
            this.render();
            this.listenTo(this.model, "change", this.render);
        },

        render : function () {
            this.$el.empty();
            this.$el.html(this.template(this.model.toJSON()));

            if (Backbone.history.fragment === "product/" + this.model.id) {
                this.$el.find(".details").show();
            }
        },

        addToCart : function (e) {
            ModernWeb.globalCart.addToCart(this.model);
            e.stopPropagation();
        },

        showProduct : function () {
            if (Backbone.history.fragment === "product/" + this.model.id) {
                Backbone.history.navigate("product", true);
            } else {
                Backbone.history.navigate("product/" + this.model.id, true);
            }
        }
    });

    return ProductsItemView;
});
