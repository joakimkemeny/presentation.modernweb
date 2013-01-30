define([
    "backbone",
    "models/DeliveryAddressModel"
], function (Backbone, DeliveryAddressModel) {
    "use strict";

    var DeliveryAddressCollection = Backbone.Collection.extend({
        model : DeliveryAddressModel
    });

    return DeliveryAddressCollection;
});
