/**
 * @module view/SubView
 */

define(['underscore', 
		'backbone', 
		'swig', 
		'jqueryui',
		'helpers/events', 
		'plugins/text!template/Panel3Template.html'], 
		function (_, 
					Backbone, 
					swig, 
					jqueryui,
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
			
			view.$el.find("#panel-3 .arrow").on("click", function (e) {
				e.preventDefault();
				
				view.updateFlipper();
			});
			
			$("#panel-3 .panel-knob-container > span").each(function() {
				var value = parseInt($(this).text(), 10);
				$(this).empty().slider({
					value: value,
					range: "min",
					animate: true,
					orientation: "vertical"
				});
			});
		},
		
		"updateFlipper": function() {
			$("body").removeClass("play");
			
			var aa = $("#panel-3 ul.flipper-content li.active");
			if (aa.html() == undefined) {
				aa = $("#panel-3 ul.flipper-content li").eq(0);
				aa.addClass("before")
					.removeClass("active")
					.next("li")
					.addClass("active")
					.closest("body")
					.addClass("play");		
			} else if (aa.is(":last-child")) {
				$("#panel-3 ul.flipper-content li").removeClass("before");
				aa.addClass("before").removeClass("active");
				aa = $("#panel-3 ul.flipper-content li").eq(0);
				aa.addClass("active")
					.closest("body")
					.addClass("play")
			} else {
				$("#panel-3 ul.flipper-content li").removeClass("before");
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