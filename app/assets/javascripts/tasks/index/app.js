(function (r) {
	requirejs.config(r);
	require(["jquery", "underscore", "backbone", "tasks/index/models", "tasks/index/views"],
	function($, _, backbone, models, views) {
		window.App = new views.TaskListView({ model: new models.TaskList() });
	});
}(myGlobalRequire));



