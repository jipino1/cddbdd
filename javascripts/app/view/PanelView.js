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
			
			view.back;
			view.next;
			view.currentPanel = "panel-1";
			view.panelContent;
			view.panelCounter;
			view.sectionCounter = 1;
			
			view.render();

			console.log('Backbone : Global : PanelView : Initialized');
		},

		"render": function () {
			var view = this;

			view.panelTemplate = swig.compile(PanelTemplate);
			view.$el.append(view.panelTemplate());
			
			view.panelContent = view.$el.find("#panel-content");
			view.back = view.$el.find("#back-btn");
			view.next = view.$el.find("#next-btn");
			view.panelCounter = view.$el.find(".panel-counter .counter");

			view.initPanelInteraction();
		},
		
		"initPanelInteraction": function () {
			var view = this;
			
			view.back.on("click", function (e) {
				e.preventDefault();
				
				var bgPos = -18 * view.sectionCounter;
				
				if (view.sectionCounter > 1) {
					view.panelContent.find("#panel-" + view.sectionCounter).fadeOut("slow", function () {
						view.panelContent.find("#panel-" + (view.sectionCounter-1)).fadeIn();
						view.sectionCounter--;
					});
				}
			});
			
			view.next.on("click", function (e) {
				e.preventDefault();
				
				var bgPos = -18 * view.panelCounter;

				if (view.sectionCounter < 9) {
					view.panelContent.find("#panel-" + view.sectionCounter).fadeOut("slow", function () {
						view.panelContent.find("#panel-" + (view.sectionCounter+1)).fadeIn();
						view.panelCounter.css({"background-position" : "0 " + bgPos + "px"})
						
						view.sectionCounter++;
						console.log("go")
					});
				}
			});
		}

	});

});