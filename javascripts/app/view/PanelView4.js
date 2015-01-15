/**
 * @module view/SubView
 */

define(['underscore', 
		'backbone', 
		'swig', 
		'helpers/events', 
		'plugins/text!template/Panel4Template.html'], 
		function (_, 
					Backbone, 
					swig, 
					Events, 
					Panel4Template) {

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

			view.panel4Template = swig.compile(Panel4Template);
			view.$el.find(".bottom-container").before(view.panel4Template());
		}

	});

});