/**
 * @module view/SubView
 */

define(['underscore', 
		'backbone', 
		'swig', 
		'helpers/events', 
		'plugins/text!template/PanelTemplate.html',
		'view/PanelView1',
		'view/PanelView2',
'view/PanelView3',
'view/PanelView4',
'view/PanelView5',
'view/PanelView6',
'view/PanelView7',
'view/PanelView8','view/PanelView9'], 
		function (_, 
					Backbone, 
					swig, 
					Events, 
					PanelTemplate,
					PanelView1,
			PanelView2,
		PanelView3,
		PanelView4,
		PanelView5,
		PanelView6,
		PanelView7,
		PanelView8,
		PanelView9) {

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
			
			view.panelView1 = new PanelView1({"el": "#panel-content"});
			view.panelView2 = new PanelView2({"el": "#panel-content"});
			view.panelView3 = new PanelView3({"el": "#panel-content"});
			view.panelView4 = new PanelView4({"el": "#panel-content"});
			view.panelView5 = new PanelView5({"el": "#panel-content"});
			view.panelView6 = new PanelView6({"el": "#panel-content"});
			view.panelView7 = new PanelView7({"el": "#panel-content"});
			view.panelView8 = new PanelView8({"el": "#panel-content"});
			view.panelView9 = new PanelView9({"el": "#panel-content"});
			
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
				
				if (view.sectionCounter > 1) {
					view.panelContent.find("#panel-" + view.sectionCounter).fadeOut("slow", function () {
						view.sectionCounter--;
						
					var bgPos = -18 * (view.sectionCounter - 1),
						posString = "0 " + bgPos + "px";
						console.log("posString: " + posString)
						view.panelContent.find("#panel-" + (view.sectionCounter)).fadeIn();
						view.panelCounter.css({"background-position" : posString});
					});
				}
			});
			
			view.next.on("click", function (e) {
				e.preventDefault();

				if (view.sectionCounter < 9) {
					var bgPos = -18 * view.sectionCounter,
						posString = "0 " + bgPos + "px";
					
					view.panelContent.find("#panel-" + view.sectionCounter).fadeOut("slow", function () {
						view.panelContent.find("#panel-" + (view.sectionCounter+1)).fadeIn();
						view.panelCounter.css({"background-position" : posString});
						
						view.sectionCounter++;
					});
				}
			});
		}

	});

});