define([
    "jquery",
    "Backbone",
    "Underscore",
    "ModernWeb",
    "text!templates/Confirm.html"
], function ($, Backbone, _, ModernWeb, confirmTemplate) {
    "use strict";

    var ConfirmView = Backbone.View.extend({

        el : "#confirm",

        events : {
            "click .btn" : "save"
        },

        initialize : function () {
            this.template = _.template(confirmTemplate);
            this.update();
            this.listenTo(ModernWeb.globalCart, "change", this.update);
        },

        render : function () {
            this.$el.empty();
            this.$el.html(this.template({
                items : ModernWeb.globalCart.get("items").toJSON(),
                shipmentPrice : ModernWeb.globalCart.get("shipmentPrice").format()
            }));
        },

        update : function () {
            if (ModernWeb.globalCart.get("deliveryAddress") &&
                ModernWeb.globalCart.get("shipmentPrice")) {
                this.render();
                ModernWeb.Util.showSlide(this.$el);
            } else {
                ModernWeb.Util.hideSlide(this.$el);
            }
        },

        save : function () {
            ModernWeb.globalCart.save(null, {
                success : function () {
                    ModernWeb.globalCart.emptyCart();
                    Backbone.history.navigate("product", true);
                }
            });
        }
    });

    return ConfirmView;
});
