sap.ui.define([], function () {
    "use strict";
    return {
        availabilityText: function (vValue) {
           
            return (vValue === "Yes") ? "Discontinued" : "Active";
        },

        availabilityState: function (vValue) {
            if (!vValue) {
                return "None"; 
            }
            return (vValue === "Yes") ? "Error" : "Success"; 
        }
    };
});
