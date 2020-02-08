sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/base/Log"
], function(Controller, Log) {
	"use strict";

	const BaseController = Controller.extend("be.rpan.epm.products.base.BaseController", /** be.rpan.epm.products.base.BaseController.prototype */ {
		constructor: function () {}
	});

	BaseController.prototype.onInit = function () {
		Log.info(this.getView().getControllerName(), "onInit");
	};

	return BaseController;
});
