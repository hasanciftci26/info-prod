sap.ui.define([
    "Agora/infoprod/infoprodui/controller/BaseController",
    "sap/ui/core/BusyIndicator",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} BaseController
     */
    function (BaseController, BusyIndicator, MessageToast) {
        "use strict";

        return BaseController.extend("Agora.infoprod.infoprodui.controller.QciDetails", {

            /* =========================================================== */
            /* lifecycle methods                                           */
            /* =========================================================== */

            onInit: function () {
                this.getRouter().getRoute("QciDetails").attachPatternMatched(this._onObjectMatched, this);
            },

            /* =========================================================== */
            /* internal methods                                            */
            /* =========================================================== */

            _onObjectMatched: function (oEvent) {
                let iSiteId = oEvent.getParameter("arguments").idSite,
                    sPath = this.getView().getModel().createKey("/Site", {
                        id_site: iSiteId
                    });

                this.getView().byId("sfSiteDetails").bindElement({
                    path: sPath,
                    events: {
                        dataReceived: (data) => {
                            if (!data.getParameters().data) {
                                MessageToast.show(this.getResourceBundle().getText("notFound"));
                            }
                        }
                    }
                });
            },

            /* =========================================================== */
            /* event handlers                                              */
            /* =========================================================== */

            onChauffageSelection: function (oEvent) {
                let sPath = oEvent.getSource().getBindingContext().getPath(),
                    iSelectedIndex = oEvent.getParameter("selectedIndex");

                this.getView().getModel().setProperty(sPath + "/chauffage_dpe", !iSelectedIndex);
            },
            onClientPrescripteurSelection: function (oEvent) {
                let sPath = oEvent.getSource().getBindingContext().getPath(),
                    iSelectedIndex = oEvent.getParameter("selectedIndex");

                this.getView().getModel().setProperty(sPath + "/client_prescripteur", !!iSelectedIndex);
            },
            onSaveForm: function () {
                let oDataModel = this.getView().getModel(),
                    oResourceBundle = this.getResourceBundle();

                if (oDataModel.hasPendingChanges()) {
                    BusyIndicator.show();
                    oDataModel.submitChanges({
                        success: (response) => {
                            BusyIndicator.hide();
                            MessageToast.show(oResourceBundle.getText("successfullySaved"));
                        },
                        error: (err) => {
                            BusyIndicator.hide();
                            MessageToast.show(err.message);
                        }
                    });
                } else {
                    MessageToast.show(oResourceBundle.getText("noChangeMade"));
                }
            },
            onCancelChanges: function () {
                let oDataModel = this.getView().getModel();

                if (oDataModel.hasPendingChanges()) {
                    oDataModel.resetChanges();
                }

                this.getRouter().navTo("QciMain");
            },
            onNavToHomepage: function () {
                let oDataModel = this.getView().getModel();

                if (oDataModel.hasPendingChanges()) {
                    oDataModel.resetChanges();
                }

                this.getRouter().navTo("Homepage");
            }
        });
    });
