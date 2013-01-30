define([
    "backbone",
    "framework/Model",
    "models/PriceModel"
], function (Backbone, Model, PriceModel) {
    "use strict";

    var DeliveryOptionModel = Model.extend({
        urlRoot : "http://3rd-party.info:8080/api/deliveryOption",

        defaults : {
            "shipmentMethod" : {
                "price" : {
                    "amount" : 0,
                    "currency" : ""
                },
                "method" : ""
            },
            "serviceLevel" : {
                "price" : {
                    "amount" : 0,
                    "currency" : ""
                },
                "level" : ""
            },
            "price" : {
                "amount" : 0,
                "currency" : ""
            }
        },

        modelDefinitions : {
            price : PriceModel
        }
    });

    return DeliveryOptionModel;
});
