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
            this.connectDeferred = $.Deferred();
        },

        connect : function () {
            var ws;
            var url = "ws://localhost:8080/ws";

            if (window.WebSocket) {
                ws = new window.WebSocket(url, this.protocol);
            } else {
                throw new Error("WebSockets is not supported");
            }

            var that = this;

            $(ws).on("open", function () {
                that.connectDeferred.resolve(that);
            });
            $(ws).on("close", function () {
                that.connectDeferred = $.Deferred();
            });
            $(ws).on("message", function (e) {
                var message = JSON.parse(e.originalEvent.data);
                that.trigger(message.command, message.data);
            });

            this.ws = ws;

            $(window).on("unload", function () {
                ws.close();
                ws = null;
            });
        },

        send : function (command, data) {
            // Do nothing
        }
    });

    _.extend(WebSocket.prototype, Backbone.Events);

    return new WebSocket("modernweb");
});
