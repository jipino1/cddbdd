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
		}

	});

});