/**
 * @module view/ExampleView
 */

define(['jquery','underscore','backbone','helpers/events','view/HomeView','view/PanelView'], function ($, _, Backbone, Events, HomeView, PanelView) {

	'use strict';

	return Backbone.View.extend({

		"events": {},

		"el": "#main",

		"initialize": function (options) {
			var view = this;

			_.bindAll(this);
			
			view.homeview;
			view.panelview;
			
			Events.bind("remove:homepage", this.removeHomepage);

			view.render();

			console.log('Backbone : Global : MainView : Initialized');
		},

		"render": function () {
			var view = this;

			view.homeview = new HomeView({
				"el": "#content"
			});
			
			view.panelView = new PanelView({
				"el": "#content"
			});
		},
		
		"removeHomepage": function () {
			var view = this;
			
			view.$el.find("#home-content").fadeTo("slow", 0, function () {
				$(this).hide();
				view.$el.find("#panel-content").show();
				view.$el.find("#panel-content").fadeTo("slow", 1);
			})
		}
	});
});