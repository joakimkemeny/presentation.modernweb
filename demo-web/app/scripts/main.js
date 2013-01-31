(function () {
    "use strict";

    require.config({
        shim : {
            Backbone : {
                deps : [ "Underscore", "jquery" ],
                exports : "Backbone"
            },
            Underscore : {
                deps : [ "jquery" ],
                exports : "_"
            }
        },

        paths : {
            jquery : "vendor/jquery.min",
            Backbone : "../components/backbone/backbone-min",
            Underscore : "../components/underscore/underscore",
            text : "../components/requirejs-text/text",

            templates : "../templates"
        }
    });

    require(["app"], function (App) {
        App.start();
    });

})();
