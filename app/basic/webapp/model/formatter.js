sap.ui.define([], function () {
    "use strict";
    return {
        availabilityText: function (vValue) {
    // (vValue == true) catches: true, "true", 1
    return (vValue == true) ? "Discontinued" : "Active";
},

        
        availabilityState: function (vValue) {
            // 1. Handle loading/empty states
            if (vValue === undefined || vValue === null) {
                return "None"; 
            }

            // 2. Return 'Error' (Red) for true, 'Success' (Green) for false
            return (vValue == true) ? "Error" : "Success"; 
        }
    };
});
