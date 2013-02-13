(function (r) {
	requirejs.config(r);
	define(["jquery", "underscore", "backbone", "ace", "presentation/models"], function($, _, backbone, ace, models) {
		var Task = models.Task;
	});
}(myGlobalRequire));



