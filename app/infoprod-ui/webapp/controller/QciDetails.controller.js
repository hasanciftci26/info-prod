sap.ui.define([
    "Agora/infoprod/infoprodui/controller/BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} BaseController
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("Agora.infoprod.infoprodui.controller.QciDetails", {
            onInit: function () {
                this.getRouter().getRoute("QciDetails").attachPatternMatched(this._onObjectMatched, this);
            },
            _onObjectMatched: function (oEvent) {
                let iSiteId = oEvent.getParameter("arguments").idSite,
                    sPath = this.getView().getModel().createKey("/Site", {
                        id_site: iSiteId
                    });

                this.getView().byId("sfSiteDetails").bindElement(sPath);
            },
            onChauffageSelection: function (oEvent) {
                let sPath = oEvent.getSource().getBindingContext().getPath(),
                    iSelectedIndex = oEvent.getParameter("selectedIndex");

                this.getView().getModel().setProperty(sPath + "/chauffage_dpe", !iSelectedIndex);
            },
            onSaveForm: function () {
                var test = "x";
            }
        });
    });
