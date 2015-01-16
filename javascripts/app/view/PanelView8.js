/**
 * @module view/SubView
 */

define(['underscore', 
		'backbone', 
		'swig', 
		'helpers/events', 
		'plugins/text!template/Panel8Template.html'], 
		function (_, 
					Backbone, 
					swig, 
					Events, 
					Panel8Template) {

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

			view.panel8Template = swig.compile(Panel8Template);
			view.$el.find(".bottom-container").before(view.panel8Template());
			
			view.initPanelInteraction();
		},
		
		"initPanelInteraction": function () {
			var view = this;
			
			$("#panel-8 .panel-knob-container > span").each(function() {
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