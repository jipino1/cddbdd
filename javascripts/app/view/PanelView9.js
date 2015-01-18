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
			
			view.$el.find("#panel-9 .arrow").on("click", function (e) {
				e.preventDefault();
				
				view.updateFlipper();
			});
		},
		
		"updateFlipper": function() {
			$("body").removeClass("play");
			
			var aa = $("#panel-9 ul.flipper-content li.active");
			if (aa.html() == undefined) {
				aa = $("#panel-9 ul.flipper-content li").eq(0);
				aa.addClass("before")
					.removeClass("active")
					.next("li")
					.addClass("active")
					.closest("body")
					.addClass("play");		
			} else if (aa.is(":last-child")) {
				$("#panel-9 ul.flipper-content li").removeClass("before");
				aa.addClass("before").removeClass("active");
				aa = $("#panel-9 ul.flipper-content li").eq(0);
				aa.addClass("active")
					.closest("body")
					.addClass("play")
			} else {
				$("#panel-9 ul.flipper-content li").removeClass("before");
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