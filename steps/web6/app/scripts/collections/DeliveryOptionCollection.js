define([
    "Backbone",
    "models/DeliveryOptionModel"
], function (Backbone, DeliveryOptionModel) {
    "use strict";

    var DeliveryOptionCollection = Backbone.Collection.extend({
        model : DeliveryOptionModel
    });

    return DeliveryOptionCollection;
});
