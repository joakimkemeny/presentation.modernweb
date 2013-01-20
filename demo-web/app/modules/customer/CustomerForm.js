define([
    "backbone",
    "underscore",
    "text!modules/customer/CustomerForm.html"
], function (Backbone, _, customerFormTemplate) {
    "use strict";

    var CustomerForm = Backbone.View.extend({

        el : "#customer-form",

        events : {
            "click #customerDelete" : "delete",
            "click #customerSave" : "save"
        },

        initialize : function () {
            this.template = _.template(customerFormTemplate);
            this.render();
        },

        render : function () {
            this.$el.html(this.template({
                customer : this.model.toJSON()
            }));
        },

        delete : function () {
            this.model.destroy({
                success : function () {
                    Backbone.history.navigate("customer", true);
                }
            });
        },

        save : function () {
            var self = this;

            this.model.save({
                firstName : $("#firstName").val(),
                lastName : $("#lastName").val()
            }, {
                wait : true,
                success : function (model) {
                    self.collection.add(model);
                    Backbone.history.navigate("customer", true);
                }
            });
        }
    });

    return CustomerForm;
});
