(function(){
    "use strict";

    define([
        "jquery",
        "backbone",
        "modules/customer/Customer",
        "modules/customer/CustomerForm",
        "modules/customer/CustomerList"
    ], function ($, Backbone, Customer, CustomerForm, CustomerList) {

        var CustomerRouter = Backbone.Router.extend({

            initialize : function () {
                this.customers = new Customer.Collection();
                this.customers.fetch({ async : false });
            },

            listCustomers : function () {
                $(".order").hide();
                $(".customer").show();

                var self = this;

                if (!this.listView) {
                    this.listView = new CustomerList({
                        collection : this.customers
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

            editCustomer : function (id) {
                $(".order").hide();
                $(".customer").show();

                var customer = (id) ? this.customers.get(id) : new Customer.Model();

                if (!this.listView) {
                    this.listCustomers();
                }

                if (this.formView) {
                    this.formView.$el.empty();
                    this.formView.undelegateEvents();
                    this.formView = null;
                }

                this.formView = new CustomerForm({
                    model : customer,
                    collection : this.customers
                });

                this.formView.$el.show("slide");
            },

            routes : {
                "" : "listCustomers",
                "customer" : "listCustomers",
                "customer/add" : "editCustomer",
                "customer/edit/:id" : "editCustomer"
            }
        });

        return CustomerRouter;
    });
})();