(function (r) {
	requirejs.config(r);
	require(["jquery", "underscore", "backbone", "ace", "presentation/models", "presentation/views"],
	function($, _, backbone, ace, models, views) {
		var editor = ace.edit("editor");
		editor.setTheme("ace/theme/monokai");
		editor.getSession().setMode("ace/mode/javascript");
		editor.setReadOnly(false);
	});
}(myGlobalRequire));



