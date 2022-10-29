sap.ui.define([
    "Agora/infoprod/infoprodui/controller/BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} BaseController
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("Agora.infoprod.infoprodui.controller.QceMain", {

            /* =========================================================== */
            /* event handlers                                              */
            /* =========================================================== */

            onNavToDetails: function (oEvent) {
                let iMissionId = oEvent.getSource().getBindingContext().getProperty("id_mission");
                this.getRouter().navTo("QceDetails", {
                    idMission: iMissionId
                });
            },
            onNavToHomepage: function () {
                this.getRouter().navTo("Homepage");
            }
        });
    });
