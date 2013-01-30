define([
    "backbone",
    "models/BaseModel",
    "models/PriceModel"
], function (Backbone, BaseModel, PriceModel) {
    "use strict";

    var DeliveryOptionModel = Backbone.Model.extend({
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
