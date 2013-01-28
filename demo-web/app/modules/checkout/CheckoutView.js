define([
    "jquery",
    "backbone",
    "underscore",
    "text!modules/checkout/CheckoutView.html"
], function ($, Backbone, _, checkoutViewTemplate) {
    "use strict";

    var CheckoutView = Backbone.View.extend({

        el : "#checkout",

        initialize : function () {
            this.template = _.template(checkoutViewTemplate);
            this.render();
        },

        render : function () {
            this.$el.empty();
            this.$el.html(this.template());
        }
    });

    return CheckoutView;
});
