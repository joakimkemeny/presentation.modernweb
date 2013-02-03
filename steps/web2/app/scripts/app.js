define([
    "jquery",
    "Underscore",
    "text!templates/test.html"
], function ($, _, testTemplate) {
    "use strict";

    var template = _.template(testTemplate);
    $("#content").html(template({
        event : "JFokus",
        presenters : ["John Wilander", "Joakim Kemeny"]
    }));

    return 'Hello from JFokus!';
});
