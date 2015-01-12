/**
 * @module view/SubView
 */

define(['underscore', 'backbone', 'swig', 'helpers/events', 'plugins/text!template/HomeTemplate.html'], function (_, Backbone, swig, Events, HomeTemplate) {

	'use strict';

	return Backbone.View.extend({

		"events": {},

		"initialize": function (options) {
			var view = this;

			_.bindAll(this);
			
			view.initiate;
			view.timeOut;

			view.render();

			console.log('Backbone : Global : SubView : Initialized');
		},

		"render": function () {
			var view = this;

			view.homeTemplate = swig.compile(HomeTemplate);
			view.$el.append(view.homeTemplate());
			
			view.initHomeInteraction();
		},
		
		"initHomeInteraction": function () {
			var view = this;
			
			view.initiate = view.$el.find("#init-btn");
			view.timeOut = setTimeout(function () {
				view.$el.find("#msg-initial").fadeTo("slow", 0, function () {
					$(this).hide();
					view.$el.find("#msg-followup").fadeTo("slow", 1);
				});
				clearTimeout(view.timeOut);
			}, 5000);
			
			view.initiate.on("click", function (e) {
				e.preventDefault();

				Events.trigger("remove:homepage");
			})
		}

	});

});