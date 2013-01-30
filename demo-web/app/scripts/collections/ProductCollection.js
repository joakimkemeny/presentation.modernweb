define([
    "backbone",
    "framework/WebSocket",
    "models/ProductModel"
], function (Backbone, webSocket, ProductModel) {
    "use strict";

    var ProductCollection = Backbone.Collection.extend({
        url : "http://local.communityhack.org/api/product",
        model : ProductModel,

        initialize : function () {
            webSocket.on("stockStatusUpdated", this.updateStockStatus, this);
        },

        updateStockStatus : function (data) {
            this.get(data.id).set("stockStatus", data.stockStatus);
        }
    });

    return ProductCollection;
});
