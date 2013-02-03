define([
    "Backbone",
    "models/ProductModel"
], function (Backbone, ProductModel) {
    "use strict";

    var ProductCollection = Backbone.Collection.extend({
        url : "/api/product",
        model : ProductModel
    });

    return ProductCollection;
});
