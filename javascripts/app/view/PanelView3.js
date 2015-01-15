/**
 * @module view/SubView
 */

define(['underscore', 
		'backbone', 
		'swig', 
		'helpers/events', 
		'plugins/text!template/Panel3Template.html'], 
		function (_, 
					Backbone, 
					swig, 
					Events, 
					Panel3Template) {

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

			view.panel3Template = swig.compile(Panel3Template);
			view.$el.find(".bottom-container").before(view.panel3Template());
			
			view.initPanelInteraction();
		},
		
		"initPanelInteraction": function () {
			var view = this;
			
			view.$el.find(".arrow").on("click", function (e) {
				e.preventDefault();
				
				view.secondPlay();
			});
		},
		
		"secondPlay": function() {
			$("body").removeClass("play");
			
			var aa = $("ul.secondPlay li.active");
			if (aa.html() == undefined) {
				aa = $("ul.secondPlay li").eq(0);
				aa.addClass("before")
					.removeClass("active")
					.next("li")
					.addClass("active")
					.closest("body")
					.addClass("play");		
			} else if (aa.is(":last-child")) {
				$("ul.secondPlay li").removeClass("before");
				aa.addClass("before").removeClass("active");
				aa = $("ul.secondPlay li").eq(0);
				aa.addClass("active")
					.closest("body")
					.addClass("play")
			} else {
				$("ul.secondPlay li").removeClass("before");
				aa.addClass("before")
				  .removeClass("active")
				  .next("li")
				  .addClass("active")
				  .closest("body")
				  .addClass("play");
			}
		}
			
	});

});