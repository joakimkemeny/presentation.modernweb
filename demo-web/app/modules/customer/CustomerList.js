(function(){
    "use strict";

    define([
        "backbone",
        "underscore",
        "text!modules/customer/CustomerList.html"
    ], function (Backbone, _, customerListTemplate) {

        var CustomerList = Backbone.View.extend({

            el : "#customer-list",

            initialize : function () {
                this.template = _.template(customerListTemplate);
                this.render();
                this.collection.on("all", this.render, this);
            },

            render : function () {
                this.$el.empty();
                this.$el.html(this.template({
                    customers : this.collection.toJSON()
                }));
            }
        });

        return CustomerList;
    });
})();