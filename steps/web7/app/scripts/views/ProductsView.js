define([
    "Backbone",
    "Underscore",
    "views/ProductsItemView",
    "text!templates/Products.html"
], function (Backbone, _, ProductsItemView, productsTemplate) {
    "use strict";

    var ProductsView = Backbone.View.extend({

        el : "#products",

        initialize : function () {
            this.template = _.template(productsTemplate);
            this.render();
        },

        render : function () {
            this.$el.html(this.template());

            var $ul = this.$el.find("ul");
            this.collection.each(function (model) {
                var view = new ProductsItemView({
                    model : model
                });
                $ul.append(view.el);
            });
        }
    });

    return ProductsView;
});
