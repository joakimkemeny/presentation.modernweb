define([
    "Backbone"
], function (Backbone) {
    "use strict";

    var ProductModel = Backbone.Model.extend({
        urlRoot : "/api/product",

        defaults : {
            id : null,
            name : null,
            info : null,
            image : null,
            intensity : null,
            stockStatus : null,
            quantity : null,
            price : null
        }
    });

    return ProductModel;
});
