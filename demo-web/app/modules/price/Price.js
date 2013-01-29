(function () {
    "use strict";

    define([
        "backbone"
    ], function (Backbone) {
        var Price = {},

            /**
             * Adapted from http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
             */
            toMoney = function(amount, decimals, decimalSeparator, thousandsSeparator, divideBy) {
                var sign, integerPart, thousandsToSeparate;

                sign = (amount < 0) ? '-' : '';
                amount = amount / divideBy;
                // Extracting the absolute value of the integer part of the number (radix 10)
                // and converting to string
                integerPart = parseInt(amount = Math.abs(amount).toFixed(decimals), 10) + '';

                if (integerPart.length > 3) {
                    thousandsToSeparate = integerPart.length % 3;
                } else {
                    thousandsToSeparate = 0;
                }

                return sign +
                    (thousandsToSeparate ? integerPart.substr(0, thousandsToSeparate) + thousandsSeparator : '') +
                    integerPart.substr(thousandsToSeparate).replace(/(\d{3})(?=\d)/g, "$1" + thousandsSeparator) +
                    (decimals ? decimalSeparator + Math.abs(amount - integerPart).toFixed(decimals).slice(2) : '');
            };

        Price = Backbone.Model.extend({
            defaults: {
                amount: 0,
                currency: ""
            },

            format : function() {

                switch (this.get("currency")) {
                    case "SEK_ORE":
                        return toMoney(this.get("amount"), 2, ',', '.', 100);
                        break;
                    case "EURO_CENTS":
                        break;
                    default:
                        throw new Error("Unknown currency " + this.get("currency"));
                }
            }
        });


        return Price;
    });

})();
