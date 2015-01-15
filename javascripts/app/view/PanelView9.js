/**
 * @module view/SubView
 */

define(['underscore', 
		'backbone', 
		'swig', 
		'helpers/events', 
		'plugins/text!template/Panel9Template.html'], 
		function (_, 
					Backbone, 
					swig, 
					Events, 
					Panel9Template) {

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

			view.panel9Template = swig.compile(Panel9Template);
			view.$el.find(".bottom-container").before(view.panel9Template());
		}

	});

});