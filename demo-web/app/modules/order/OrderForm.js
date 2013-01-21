(function(){
    "use strict";

    define([
        "backbone",
        "underscore",
        "text!modules/order/OrderForm.html"
    ], function (Backbone, _, orderFormTemplate) {

        var OrderForm = Backbone.View.extend({

            el : "#order-form",

            events : {
                "click #orderDelete" : "delete",
                "click #orderSave" : "save"
            },

            initialize : function () {
                this.template = _.template(orderFormTemplate);
                this.render();
            },

            render : function () {
                this.$el.html(this.template({
                    order : this.model.toJSON()
                }));
            },

            delete : function () {
                this.model.destroy({
                    success : function () {
                        Backbone.history.navigate("order", true);
                    }
                });
            },

            save : function () {
                var self = this;

                this.model.save({
                    customer : $("#customer").val(),
                    quantity : $("#quantity").val()
                }, {
                    wait : true,
                    success : function (model) {
                        self.collection.add(model);
                        Backbone.history.navigate("order", true);
                    }
                });
            }
        });

        return OrderForm;
    });
})();