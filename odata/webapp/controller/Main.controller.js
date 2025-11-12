sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sapips.training.odata.controller.Main", {
        formatPrice: function (price) {
            return "₱" + Number(price).toFixed(2);
        }
    });
});