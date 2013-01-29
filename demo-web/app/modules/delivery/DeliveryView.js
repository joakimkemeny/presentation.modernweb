(function(){
    "use strict";

    define([
        "jquery",
        "backbone",
        "underscore",
        "modules/delivery/DeliveryOption",
        "text!modules/delivery/DeliveryView.html"
    ], function ($, Backbone, _, DeliveryOption, deliveryTemplate) {

        var attachEventHandlers = function (collection) {
            _.each(collection, function(deliveryOption) {
                $("#btn" + deliveryOption.shipmentMethod.method).click(function() {
                    $("#shipmentPrice").text(deliveryOption.price.format());
                });
            })
        },

        DeliveryView = Backbone.View.extend({

            el : "#checkout",

            initialize : function () {
                var self = this;
                this.template = _.template(deliveryTemplate);
                this.collection = new DeliveryOption.Collection();
                this.collection.fetch({
                    success: function() {
                        self.render(self);
                    }
                });
            },

            render : function (self) {
                var jsonCollection = self.collection.toJSON();
                self.$el.empty();
                self.$el.html(self.template({
                    deliveryOptions: jsonCollection
                }));
                attachEventHandlers(jsonCollection);
            }
        });

        return DeliveryView;
    });
})();