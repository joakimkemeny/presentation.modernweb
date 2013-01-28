define([
    "backbone"
], function (Backbone) {
    "use strict";

    var Product = {};

    Product.Model = Backbone.Model.extend({
        urlRoot : "http://localhost:8080/api/product"
    });

    Product.Collection = Backbone.Collection.extend({
        url : "http://localhost:8080/api/product",
        model : Product.Model
    });

    return Product;
});
