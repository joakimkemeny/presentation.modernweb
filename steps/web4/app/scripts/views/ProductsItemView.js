define([
    "Backbone",
	"Underscore",
    "text!templates/ProductsItem.html"
], function (Backbone, _, productsItemTemplate) {
    "use strict";

    var ProductsView = Backbone.View.extend({

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
            console.log("Adding " + this.model.get("name") + " to Cart");
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

    return ProductsView;
});
