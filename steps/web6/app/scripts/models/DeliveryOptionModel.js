define([
    "Backbone",
    "ModernWeb",
    "models/PriceModel"
], function (Backbone, ModernWeb, PriceModel) {
    "use strict";

    var DeliveryOptionModel = ModernWeb.Model.extend({

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
