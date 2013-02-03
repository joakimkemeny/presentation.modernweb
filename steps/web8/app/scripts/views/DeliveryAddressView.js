define([
    "jquery",
    "Backbone",
    "Underscore",
    "ModernWeb",
    "text!templates/DeliveryAddress.html"
], function ($, Backbone, _, ModernWeb, deliveryAddressTemplate) {
    "use strict";

    var DeliveryAddressView = Backbone.View.extend({

        el : "#deliveryAddress",

        events : {
            "click .btn" : "save",
            "keydown input" : "clearAddress"
        },

        initialize : function () {
            this.template = _.template(deliveryAddressTemplate);
            this.render();
        },

        render : function () {
            this.$el.empty();
            this.$el.html(this.template(this.model.toJSON()));
        },

        save : function () {
            this.model.set("name", $("#name").val());
            this.model.set("address", $("#address").val());
            this.model.set("postalCode", $("#postalCode").val());
            this.model.set("city", $("#city").val());
            this.model.set("email", $("#email").val());

            ModernWeb.globalCart.set("deliveryAddress", this.model);
            ModernWeb.Util.hideFade(this.$el.find(".btn"));
        },

        clearAddress : function () {
            ModernWeb.globalCart.set("deliveryAddress", null);
            Backbone.history.navigate("checkout", false);
            ModernWeb.Util.showFade(this.$el.find(".btn"));
        }
    });

    return DeliveryAddressView;
});
