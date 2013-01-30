define([
    "jquery",
    "backbone",
    "underscore",
    "modules/cart/CartItemView",
    "text!modules/cart/CartView.html"
], function ($, Backbone, _, CartItemView, cartViewTemplate) {
    "use strict";

    var CartView = Backbone.View.extend({

        el : "#cart",

        initialize : function () {
            this.template = _.template(cartViewTemplate);
            this.render();
            //this.listenTo(this.model, "change", this.render);
            this.listenTo(this.model.get("products"), "add change remove", this.render);
        },

        render : function () {
            this.$el.empty();
            this.$el.html(this.template({
                total : this.model.getTotal()
            }));

            var $ul = $("ul", this.$el);
            this.model.get("products").each(function (model) {
                var view = new CartItemView({
                    model : model
                });
                $ul.append(view.el);
            });
        }
    });

    return CartView;
});
