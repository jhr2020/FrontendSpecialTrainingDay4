sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/models"
], function (Controller, Model) {
	"use strict";

	return Controller.extend("com.cpro.jhr.training.Training1.controller.View2", {
		
		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.cpro.jhr.training.Training1.view.View2
		 */
		onInit: function () {
			this.getRouter().getRoute("View2").attachPatternMatched(this.onView2Matched, this);
			this.getRouter().getRoute("View2Query").attachPatternMatched(this.onView2QueryMatched, this);
			
			this.getView().setModel(Model.createViewModel(), "viewModel");
			var oModel = this.getView().getModel("viewModel");
			oModel.setProperty("/bindingMode", oModel.getDefaultBindingMode());
			oModel.setProperty("/content", "content");
		},
		
		onView2Matched: function(oEvent){
			this.byId("ElementBindingForm").bindElement("/SomeEntity('someID')");
		},
		
		onView2QueryMatched: function(oEvent){
			var sFluggesellschaftID = oEvent.getParameter("arguments").fluggesellschaftID;
			this.byId("ElementBindingForm").bindElement("/flightSet('"+ sFluggesellschaftID +"')");
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.cpro.jhr.training.Training1.view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.cpro.jhr.training.Training1.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.cpro.jhr.training.Training1.view.View2
		 */
		//	onExit: function() {
		//
		//	}
		
		onNavBack: function(oEvent){
			this.getRouter().navTo("RouteView1");
		},
		
		onToggleButtonPress: function(oEvent){
			var oViewModel = this.getView().getModel("viewModel");
			
			if(oViewModel.getProperty("/test") === "Data"){
				oViewModel.setProperty("/test", "");
			}
			else
				oViewModel.setProperty("/test", "Data");
		}

	});

});