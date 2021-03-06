define([
    "Backbone",
    "Underscore",
    "ModernWeb",
    "text!templates/ProductsItem.html"
], function (Backbone, _, ModernWeb, productsItemTemplate) {
    "use strict";

    var ProductsItemView = Backbone.View.extend({

        tagName : "li",

        events : {
            "click .btn" : "addToCart",
            "click" : "showProduct"
        },

        initialize : function () {
            this.template = _.template(productsItemTemplate);
            this.render();
        },

        render : function () {
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
