(function () {
    "use strict";

    define([
        "backbone"
    ], function (Backbone) {
        var Price = {},

            /**
             Adapted from http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
             */
            toMoney = function(amount, decimals, decimalSeparator, thousandsSeparator) {
                var sign = (amount < 0) ? '-' : '',

                    // Extracting the absolute value of the integer part of the number (radix 10)
                    // and converting to string
                    integerPart = parseInt(amount = Math.abs(amount).toFixed(decimals), 10) + '',
                    thousandsToSeparate;

                    if (integerPart.length > 3) {
                        thousandsToSeparate = integerPart.length % 3;
                    } else {
                        thousandsToSeparate = 0;
                    }

                return sign + (thousandsToSeparate ? integerPart.substr(0, thousandsToSeparate) + thousandsSeparator : '') + integerPart.substr(thousandsToSeparate).replace(/(\d{3})(?=\d)/g, "$1" + thousandsSeparator) + (c ? d + Math.abs(n - integerPart).toFixed(c).slice(2) : '');
            };

        Price.Model = Backbone.Model.extend({
            defaults: {
                amount: 0,
                currency: ""
            }
        });

        Price.format = function() {

            switch (this.currency) {
                case "SEK_ORE":
                    return toMoney(this.amount, 2, ',', '.');
                    break;
                case "EURO_CENTS":
                    break;
                default:
                    throw new Error("Unknown currency " + this.currency);
            }
        }

        return Price;
    });

})();
