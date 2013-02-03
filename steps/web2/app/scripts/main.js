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
            }
        },

        paths : {
            jquery : "vendor/jquery.min",
            Underscore : "../components/underscore/underscore",
            text : "../components/requirejs-text/text",

            templates : "../templates"
        }
    });

    require(['app'], function (app) {
        // use app here
        console.log(app);
    });

})();
