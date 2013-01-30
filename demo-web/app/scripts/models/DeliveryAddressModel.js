define([
    "backbone"
], function (Backbone) {
    "use strict";

    var DeliveryAddressModel = Backbone.Model.extend({
        defaults : {
            name : null,
            address : null,
            postalCode : null,
            city : null,
            email : null
        }
    });

    return DeliveryAddressModel;
});
