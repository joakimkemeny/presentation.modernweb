define([
    "backbone"
], function (Backbone) {
    "use strict";

    var Product = {};

    Product.Model = Backbone.Model.extend({
        urlRoot : "http://local.communityhack.org/api/product"
    });

    Product.Collection = Backbone.Collection.extend({
        url : "http://local.communityhack.org/api/product",
        model : Product.Model
    });

    return Product;
});
