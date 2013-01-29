(function () {
    "use strict";

    define([
        "backbone",
        "modules/price/Price"
    ], function (Backbone, PriceModel) {

        var DeliveryOption = {};

        DeliveryOption.Model = Backbone.Model.extend({
            defaults : {
                "shipmentMethod":
                    {"price":
                        {
                            "amount":0,
                            "currency":""
                        },
                        "method":""
                    },
                "serviceLevel":
                    {"price":
                        {
                            "amount":0,
                            "currency":""
                        },
                        "level":""
                    },
                "price":
                    {
                        "amount":0,
                        "currency":""
                    }
            },
            urlRoot: "http://local.communityhack.org:8080/api/deliveryOption"
//            urlRoot: "3rd-party.net:8080/api/deliveryOption"

/*
            // Nested Price model handled à la http://stackoverflow.com/a/9904874
            model: {
                price: PriceModel
            },

            parse: function(response){
                var embeddedModel, embeddedData;

                // Make sure all keys in model are instantiated as their real classes
                for(var key in this.model) {
                    embeddedModel = this.model[key],
                    embeddedData = response[key];
                    response[key] = new embeddedModel(embeddedData, {parse:true});
                }
                return response;
            }
*/
        });

        DeliveryOption.Collection = Backbone.Collection.extend({
            model: DeliveryOption.Model,
            url: "http://local.communityhack.org:8080/api/deliveryOption"
//            url: "3rd-party.net:8080/api/deliveryOption"
        });

        return DeliveryOption;

    });

})();
