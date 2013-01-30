define([
    "backbone"
], function (Backbone) {
    "use strict";

    var CartItemModel = Backbone.Model.extend({
        defaults : {
            id : null,
            name : null,
            price : null,
            quantity : null
        }
    });

    return CartItemModel;
});
