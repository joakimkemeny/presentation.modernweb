(function(){
    "use strict";

    define([
        "jquery",
        "backbone",
        "modules/order/Order",
        "modules/order/OrderForm",
        "modules/order/OrderList"
    ], function ($, Backbone, Order, OrderForm, OrderList) {

        var OrderRouter = Backbone.Router.extend({

            initialize : function () {
                this.orders = new Order.Collection();
                this.orders.fetch({ async : false });
            },

            listOrders : function () {
                $(".customer").hide();
                $(".order").show();

                var self = this;

                if (!this.listView) {
                    this.listView = new OrderList({
                        collection : this.orders
                    });
                }

                if (this.formView) {
                    this.formView.$el.hide("slide", function () {
                        self.formView.undelegateEvents();
                        self.formView.$el.empty();
                        self.formView = null;
                    });
                }
            },

            editOrder : function (id) {
                $(".customer").hide();
                $(".order").show();

                var order = (id) ? this.orders.get(id) : new Order.Model();

                if (!this.listView) {
                    this.listOrders();
                }

                if (this.formView) {
                    this.formView.$el.empty();
                    this.formView.undelegateEvents();
                    this.formView = null;
                }

                this.formView = new OrderForm({
                    model : order,
                    collection : this.orders
                });

                this.formView.$el.show("slide");
            },

            routes : {
                "order" : "listOrders",
                "order/add" : "editOrder",
                "order/edit/:id" : "editOrder"
            }
        });

        return OrderRouter;
    });
})();