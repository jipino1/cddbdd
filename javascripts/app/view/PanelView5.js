/**
 * @module view/SubView
 */

define(['underscore', 
		'backbone', 
		'swig', 
		'helpers/events', 
		'plugins/text!template/Panel5Template.html'], 
		function (_, 
					Backbone, 
					swig, 
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
		}

	});

});