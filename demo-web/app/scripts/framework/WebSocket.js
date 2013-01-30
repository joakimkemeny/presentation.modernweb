define([
    "jquery",
    "underscore",
    "backbone",
    "framework/Object"
], function ($, _, Backbone, Object) {
    "use strict";

    var WebSocket = Object.extend({

        constructor : function (protocol) {
            this.protocol = protocol;
        },

        connect : function () {
            var self = this;

            this.ws = new window.WebSocket("ws://localhost:8080/ws", this.protocol);

            $(this).on("message", function (e) {
                var message = JSON.parse(e.originalEvent.data);
                self.trigger(message.command, message.data);
            });
        }
    });

    _.extend(WebSocket.prototype, Backbone.Events);

    return {
        product : new WebSocket("product")
    };
});
