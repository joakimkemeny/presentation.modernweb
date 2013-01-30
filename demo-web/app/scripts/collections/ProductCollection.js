define([
    "backbone",
    "framework/WebSocket",
    "models/ProductModel"
], function (Backbone, WebSocket, ProductModel) {
    "use strict";

    var ProductCollection = Backbone.Collection.extend({
        url : "/api/product",
        model : ProductModel,

        initialize : function () {
            WebSocket.product.connect();
            WebSocket.product.on("stockStatusUpdated", this.stockStatusUpdated, this);
        },

        stockStatusUpdated : function (data) {
            var model = this.get(data.id);
            model.set("stockStatus", data.stockStatus);
        }
    });

    return ProductCollection;
});
