sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("basic.controller.View1", {
        onInit() {
        },
            onPress: function (oEvent) {
                var oItem = oEvent.getSource();
                var sPath = oItem.getBindingContext().getProperty("ID");
                
                this.getOwnerComponent().getRouter().navTo("object", {
                    objectId: sPath
                });
            }
    });
});