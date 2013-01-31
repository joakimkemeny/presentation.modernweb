define([
    "jquery",
    "Backbone",
    "Underscore",
    "views/ProductsItemView",
    "text!templates/Products.html"
], function ($, Backbone, _, ProductsItemView, productsViewTemplate) {
    "use strict";

    var ProductsView = Backbone.View.extend({

        el : "#products",

        initialize : function () {
            this.template = _.template(productsViewTemplate);
            this.render();
        },

        render : function () {
            this.$el.empty();
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
