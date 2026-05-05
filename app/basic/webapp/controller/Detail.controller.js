sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "basic/model/formatter" 
], function (Controller, formatter) {
    "use strict";

    return Controller.extend("basic.controller.Detail", {
        formatter: formatter, 
        onInit: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            // Listen for the 'object' route to perform Element Binding
            oRouter.getRoute("object").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (oEvent) {
            var sObjectId = oEvent.getParameter("arguments").objectId;
           this.getView().bindElement({
            path: "/Products(ID='" + sObjectId + "',IsActiveEntity=true)", 
            parameters: {
                "$expand": "supplier,category"
            }
    });
}

    });
});
