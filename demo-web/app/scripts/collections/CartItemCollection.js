define([
    "backbone",
    "models/CartItemModel"
], function (Backbone, CartItemModel) {
    "use strict";

    var CartItemCollection = Backbone.Collection.extend({
        model : CartItemModel
    });

    return CartItemCollection;
});
