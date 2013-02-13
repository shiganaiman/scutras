(function (r) {
	requirejs.config(r);
	require(["jquery", "underscore", "backbone", "models/tasks", "views/tasks/index/views"],
	function($, _, backbone, models, views) {
		window.App = new views.TaskListView({ model: new models.TaskList() });
	});
}(scutras.require.config));
