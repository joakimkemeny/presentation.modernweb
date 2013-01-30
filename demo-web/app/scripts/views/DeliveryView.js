define([
    "jquery",
    "backbone",
    "underscore",
    "collections/DeliveryOptionCollection",
    "text!templates/Delivery.html"
], function ($, Backbone, _, DeliveryOptionCollection, deliveryTemplate) {
    "use strict";

    var attachEventHandlers = function (collection) {
        _.each(collection, function (deliveryOption) {
            $("#btn" + deliveryOption.shipmentMethod.method).click(function () {
                $("#shipmentPrice").text(deliveryOption.price.format());
            });
        });
    };

    var DeliveryView = Backbone.View.extend({

        el : "#checkout",

        initialize : function () {
            var self = this;
            this.template = _.template(deliveryTemplate);
            this.collection = new DeliveryOptionCollection();
            this.collection.fetch({
                success : function () {
                    self.render(self);
                }
            });
        },

        render : function (self) {
            var jsonCollection = self.collection.toJSON();
            self.$el.empty();
            self.$el.html(self.template({
                deliveryOptions : jsonCollection
            }));
            attachEventHandlers(jsonCollection);
        }
    });

    return DeliveryView;
});
