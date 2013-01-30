define([
    "backbone"
], function (Backbone) {
    "use strict";

    var ProductModel = Backbone.Model.extend({
        urlRoot : "http://local.communityhack.org/api/product",

        defaults : {
            id : null,
            name : null,
            info : null,
            image : null,
            stockStatus : null,
            quantity : null,
            price : null
        }
    });

    return ProductModel;
});
