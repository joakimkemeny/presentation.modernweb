define([
    "Backbone",
    "models/DeliveryOptionModel"
], function (Backbone, DeliveryOptionModel) {
    "use strict";

    var DeliveryOptionCollection = Backbone.Collection.extend({
        url : "http://3rd-party.info:8080/api/deliveryOption",
        model : DeliveryOptionModel
    });

    return DeliveryOptionCollection;
});
