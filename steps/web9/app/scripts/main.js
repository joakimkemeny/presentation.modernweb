(function () {
    "use strict";

    require.config({
        shim : {
            jquery : {
                exports : "$"
            },
            Underscore : {
                deps : [ "jquery" ],
                exports : "_"
            },
            Backbone : {
                deps : [ "Underscore", "jquery" ],
                exports : "Backbone"
            }
        },

        paths : {
            jquery : "vendor/jquery.min",
            Underscore : "../components/underscore/underscore",
            Backbone : "../components/backbone/backbone-min",
            text : "../components/requirejs-text/text",

            templates : "../templates"
        }
    });

    require(['app'], function (app) {
        app.start();
    });

})();
