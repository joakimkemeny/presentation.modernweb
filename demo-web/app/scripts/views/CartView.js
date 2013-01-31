define([
    "jquery",
    "Backbone",
    "Underscore",
    "views/CartItemView",
    "text!templates/Cart.html"
], function ($, Backbone, _, CartItemView, cartViewTemplate) {
    "use strict";

    var CartView = Backbone.View.extend({

        el : "#cart",

        initialize : function () {
            var self = this;

            this.template = _.template(cartViewTemplate);
            this.render();
        },

        render : function () {
            this.$el.empty();
            this.stopListening();
            this.listenTo(this.model, "change", this.render);
            this.listenTo(this.model.get("items"), "all", this.renderItems);
            this.$el.html(this.template({
                total : this.model.getTotal()
            }));

            var $ul = this.$el.find("ul");
            this.model.get("items").each(function (model) {
                var view = new CartItemView({
                    model : model
                });
                $ul.append(view.el);
            });

            this.renderItems();
        },

        renderItems : function () {
            var $ul = this.$el.find("ul");
            $ul.empty();
            this.model.get("items").each(function (model) {
                var view = new CartItemView({
                    model : model
                });
                $ul.append(view.el);
            });
        }
    });

    return CartView;
});
