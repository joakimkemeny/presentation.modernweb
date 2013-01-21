(function(){
    "use strict";

    define([
        "backbone",
        "underscore",
        "text!modules/order/OrderList.html"
    ], function (Backbone, _, orderListTemplate) {

        var OrderList = Backbone.View.extend({

            el : "#order-list",

            initialize : function () {
                this.template = _.template(orderListTemplate);
                this.render();
                this.collection.on("all", this.render, this);
            },

            render : function () {
                this.$el.empty();
                this.$el.html(this.template({
                    orders : this.collection.toJSON()
                }));
            }
        });

        return OrderList;
    });
})();