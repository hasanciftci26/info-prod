sap.ui.define([
    "Agora/infoprod/infoprodui/controller/BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} BaseController
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("Agora.infoprod.infoprodui.controller.InfoProdQciMain", {
            onNavToDetails: function (oEvent) {
                let iSiteId = oEvent.getSource().getBindingContext().getProperty("id_site");
                this.getRouter().navTo("QciDetails", {
                    idSite: iSiteId
                });
            }
        });
    });
