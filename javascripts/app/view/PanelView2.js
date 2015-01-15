/**
 * @module view/SubView
 */

define(['underscore', 
		'backbone', 
		'swig', 
		'helpers/events', 
		'plugins/text!template/Panel2Template.html'], 
		function (_, 
					Backbone, 
					swig, 
					Events, 
					Panel2Template) {

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

			view.panel2Template = swig.compile(Panel2Template);
			view.$el.find(".bottom-container").before(view.panel2Template());
		}

	});

});