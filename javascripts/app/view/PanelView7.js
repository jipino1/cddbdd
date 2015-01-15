/**
 * @module view/SubView
 */

define(['underscore', 
		'backbone', 
		'swig', 
		'helpers/events', 
		'plugins/text!template/Panel7Template.html'], 
		function (_, 
					Backbone, 
					swig, 
					Events, 
					Panel7Template) {

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

			view.panel7Template = swig.compile(Panel7Template);
			view.$el.find(".bottom-container").before(view.panel7Template());
		}

	});

});