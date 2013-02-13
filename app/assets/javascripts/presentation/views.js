(function (r) {
	requirejs.config(r);
	define(["jquery", "underscore", "backbone", "ace", "presentation/models"], function($, _, backbone, ace, models) {
		var Task = models.Task;

	    // タスクを表示するビュー。
	    // ビューは Backbone.View を継承。
	    var TaskView = backbone.View.extend({
	     });
		
		return {
	         "TaskView": TaskView
	    };
	});
}(myGlobalRequire));



