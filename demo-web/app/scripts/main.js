(function () {
    "use strict";

    require.config({
        shim : {
            backbone : {
                deps : [ "underscore", "jquery" ],
                exports : "Backbone"
            },
            underscore : {
                deps : [ "jquery" ],
                exports : "_"
            }
        },

        paths : {
            jquery : 'vendor/jquery.min',
            backbone : "../components/backbone/backbone-min",
            underscore : "../components/underscore/underscore",
            text : "../components/requirejs-text/text",

            modules : "../modules"
        }
    });

    require(["app"], function (App) {
        App.start();
    });
})();