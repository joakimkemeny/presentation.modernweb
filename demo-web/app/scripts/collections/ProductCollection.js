define([
    "backbone",
    "models/ProductModel"
], function (Backbone, ProductModel) {
    "use strict";

    var ProductCollection = Backbone.Collection.extend({
        url : "http://local.communityhack.org/api/product",
        model : ProductModel
    });

    return ProductCollection;
});
