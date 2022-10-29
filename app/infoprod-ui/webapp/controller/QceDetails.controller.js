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

        return BaseController.extend("Agora.infoprod.infoprodui.controller.QceDetails", {

            /* =========================================================== */
            /* lifecycle methods                                           */
            /* =========================================================== */

            onInit: function () {
                this.getRouter().getRoute("QceDetails").attachPatternMatched(this._onObjectMatched, this);
            },

            /* =========================================================== */
            /* internal methods                                            */
            /* =========================================================== */

            _onObjectMatched: function (oEvent) {
                let iMissionId = oEvent.getParameter("arguments").idMission,
                    sPath = `/Mission(${iMissionId})`;

                this.getView().byId("sfMissionDetails").bindElement({
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

                this.getRouter().navTo("QceMain");
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
