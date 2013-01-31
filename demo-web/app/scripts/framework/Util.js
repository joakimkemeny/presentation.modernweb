define([
    "jquery"
], function ($) {
    "use strict";

    var Util = {};

    Util.hideSlide = function (element) {
        element.animate({
            height : "hide"
        }, 400);
    };

    Util.showSlide = function (element) {
        element.animate({
            height : "show"
        }, 400);
    };

    Util.hideFade = function (element) {
        element.animate({ opacity : 0 });
    };

    Util.showFade = function (element) {
        element.animate({ opacity : 1 });
    };

    return Util;
});
