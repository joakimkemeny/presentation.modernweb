define([
    "jquery",
    "Backbone",
    "Underscore",
    "ModernWeb",
    "text!templates/DeliveryOptions.html"
], function ($, Backbone, _, ModernWeb, deliveryOptionsTemplate) {
    "use strict";

    var DeliveryOptionsView = Backbone.View.extend({

        el : "#deliveryOptions",

        events : {
            "change [name='shipmentMethod']" : "save"
        },

        initialize : function () {
            this.template = _.template(deliveryOptionsTemplate);
            this.update();
            this.listenTo(ModernWeb.globalCart, "change:deliveryAddress", this.update);
        },

        render : function () {
            this.$el.empty();
            this.$el.html(this.template({
                deliveryOptions : this.collection.toJSON()
            }));
        },

        update : function () {
            if (ModernWeb.globalCart.get("deliveryAddress")) {
                this.render();
                ModernWeb.Util.showSlide(this.$el);
            } else {
                ModernWeb.Util.hideSlide(this.$el);
            }
        },

        save : function () {
            var method = $("[name='shipmentMethod']:checked").val();
            var selectedOption = this.collection.find(function (option) {
                return option.get("shipmentMethod").method === method;
            });
            ModernWeb.globalCart.set("shipmentPrice", selectedOption.get("price"));
            ModernWeb.globalCart.set("shipmentMethod", method);
        }
    });

    return DeliveryOptionsView;
});
