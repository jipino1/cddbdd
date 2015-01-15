/**
 * @module view/SubView
 */

define(['underscore', 
		'backbone', 
		'swig', 
		'jqueryui',
		'helpers/events', 
		'plugins/text!template/Panel5Template.html'], 
		function (_, 
					Backbone, 
					swig, 
					jqueryui,
					Events, 
					Panel5Template) {

	'use strict';

	return Backbone.View.extend({

		"events": {},

		"initialize": function (options) {
			var view = this;

			_.bindAll(this);
			
			view.render();

			console.log('Backbone : Global : PanelView : Initialized');
		},

		"render": function () {
			var view = this;

			view.panel5Template = swig.compile(Panel5Template);
			view.$el.find(".bottom-container").before(view.panel5Template());
			
			view.initPanelInteraction();
		},
		
		"initPanelInteraction": function () {
			var view = this;
			
			$("#panel-5 .panel-top-container .panel-knob-container > span").each(function() {
				var value = parseInt($(this).text(), 10);
				$(this).empty().slider({
					value: value,
					range: "min",
					animate: true,
					orientation: "horizontal"
				});
			});
			
			$("#panel-5 .panel-bottom-container .panel-knob-container > span").each(function() {
				var value = parseInt($(this).text(), 10);
				$(this).empty().slider({
					value: value,
					range: "min",
					animate: true,
					orientation: "vertical"
				});
			});
		}

	});

});