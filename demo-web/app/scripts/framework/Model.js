define([
    "backbone"
], function (Backbone) {
    "use strict";

    // Nested Price model handled à la http://stackoverflow.com/a/9904874
    var BaseModel = Backbone.Model.extend({

        modelDefinitions : {},

        parse : function (response) {

            var EmbeddedModel, embeddedData;

            for (var key in this.modelDefinitions) {
                EmbeddedModel = this.modelDefinitions[key];
                embeddedData = response[key];
                response[key] = new EmbeddedModel(embeddedData, { parse : true });
            }

            return response;
        }
    });

    return BaseModel;
});
