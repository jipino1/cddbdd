/**
 * @module view/SubView
 */

define(['underscore', 
		'backbone', 
		'swig', 
		'knobKnob',
		'jqueryui',
		'jqueryknob',
		'helpers/events', 
		'plugins/text!template/Panel1Template.html'], 
		function (_, 
					Backbone, 
					swig, 
					knobKnob,
					jqueryui,
					jqueryknob,
					Events, 
					Panel1Template) {

	'use strict';

	return Backbone.View.extend({

		"events": {},

		"initialize": function (options) {
			var view = this;

			_.bindAll(this);
			
			view.numBars = 0;
			view.lastNum = -1;
			
			view.render();

			console.log('Backbone : Global : PanelView : Initialized');
		},

		"render": function () {
			var view = this;

			view.panel1Template = swig.compile(Panel1Template);
			view.$el.find(".bottom-container").before(view.panel1Template());
			
			view.initSectionInteractions();
		},
		
		"initSectionInteractions": function () {
			var view = this;
			
			view.$el.find("#control").knobKnob({
				span: 10,
				value: 0,
				turn: function(ratio) {
					//numBars
				}
			});
			
			$("#panel-1 #knob-container > span").each(function() {
				var value = parseInt($(this).text(), 10);
				$(this).empty().slider({
					value: value,
					range: "min",
					animate: true,
					orientation: "vertical"
				});
			});
			
			$(function() {
				view.$el.find(".dial").knob();
			});
		}
	});

});