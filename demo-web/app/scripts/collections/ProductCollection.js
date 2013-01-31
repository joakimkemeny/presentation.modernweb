define([
    "Backbone",
    "ModernWeb",
    "models/ProductModel"
], function (Backbone, ModernWeb, ProductModel) {
    "use strict";

    var ProductCollection = Backbone.Collection.extend({
        url : "/api/product",
        model : ProductModel,

        initialize : function () {
            ModernWeb.webSocket.on("stockStatusUpdated", this.stockStatusUpdated, this);
        },

        stockStatusUpdated : function (data) {
            var model = this.get(data.id);
            model.set("stockStatus", data.stockStatus);
        }
    });

    return ProductCollection;
});
