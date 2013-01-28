define([
    "jquery",
    "backbone",
    "underscore",
    "modules/product/ProductsItemView",
    "text!modules/product/ProductsView.html"
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

            var $ul = $("ul", this.$el);
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
