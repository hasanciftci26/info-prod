sap.ui.define([
    "Agora/infoprod/infoprodui/controller/BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} BaseController
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("Agora.infoprod.infoprodui.controller.Homepage", {
            onAfterRendering: function () {
                this.getView().getModel().read("/Site/$count", {
                    filters: null,
                    sorters: null,
                    async: true,
                    success: (oData) => {
                        this.getView().byId("numInfoProdQci").setValue(oData);
                    }
                });

                this.getView().getModel().read("/Mission/$count", {
                    filters: null,
                    sorters: null,
                    async: true,
                    success: (oData) => {
                        this.getView().byId("numInfoProdQce").setValue(oData);
                    }
                });
            },
            onNavToApplication(sApplication) {
                this.getRouter().navTo(sApplication);
            }
        });
    });
