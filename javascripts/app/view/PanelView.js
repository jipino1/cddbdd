/**
 * @module view/SubView
 */

define(['underscore', 'backbone', 'swig', 'helpers/events', 'plugins/text!template/PanelTemplate.html'], function (_, Backbone, swig, Events, PanelTemplate) {

	'use strict';

	return Backbone.View.extend({

		"events": {},

		"initialize": function (options) {
			var view = this;

			_.bindAll(this);
			
			view.initiate;

			view.render();

			console.log('Backbone : Global : PanelView : Initialized');
		},

		"render": function () {
			var view = this;

			view.panelTemplate = swig.compile(PanelTemplate);
			view.$el.append(view.panelTemplate());
			
			view.initPanelInteraction();
		},
		
		"initPanelInteraction": function () {
			var view = this;
			
		}

	});

});