(function (r) {
	requirejs.config(r);
	require(["ace"],function(l) {
		var editor = ace.edit("editor");
		editor.setTheme("ace/theme/monokai");
		editor.getSession().setMode("ace/mode/javascript");
		editor.setReadOnly(true);
	});
}(myGlobalRequire));

