define([
    "jquery",
    "Backbone",
    "Underscore",
    "framework/Object"
], function ($, Backbone, _, Object) {
    "use strict";

    var WebSocket = Object.extend({

        constructor : function () {
        },

        connect : function () {
            var self = this;

            this.ws = new window.WebSocket("ws://localhost:8080/ws", "modernweb");

            $(this.ws).on("message", function (e) {
                var message = JSON.parse(e.originalEvent.data);
                self.trigger(message.command, message.data);
            });
        }
    });

    _.extend(WebSocket.prototype, Backbone.Events);

    return WebSocket;
});
