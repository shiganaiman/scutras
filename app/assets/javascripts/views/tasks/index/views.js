(function(r) {
	requirejs.config(r);
	// jquery、underscore、backbone、models に依存
	define([ "jquery", "underscore", "backbone", "models/tasks" ], function($, _, backbone, models) {
		var Task = models.Task;
		var TaskList = models.TaskList;

		// タスクを表示するビュー。
		// ビューは backbone.View を継承。
		var TaskView = backbone.View.extend({
			// ビューをレンダリングするタグの名前を指定。
			tagName : "div",

			// テンプレート。
			// underscore のテンプレートを使用。
			template : _.template($("#task-template").html()),

			// イベントハンドラのマッピング。
			// CSS セレクタにマッチした要素にイベントハンドラを自動でセットしてくれる。
			events : {
				"change input[type=checkbox]" : "_onCheck",
				"click a.edit-link" : "_onEdit",
				"click input.save-input" : "_onSave",
				"click input.cancel-input" : "_onCancel",
				"click input.delete-input" : "_onDelete"
			},

			initialize : function() {
				// モデルの set メソッドで値が変更されたら change イベントが発生するので、
				// 再描画する。
				this.model.bind("change", this.render, this);

				// モデルのバリデーションに失敗したらエラーメッセージを表示。
				this.model.bind("error", this._onError, this);
			},

			_onError : function(model, error) {
				alert(error);
			},

			_onCheck : function() {
				var completed = this.model.get("completed");
				this.model.set({
					completed : !completed
				});
			},

			_onEdit : function() {
				this.model.set({
					isEditing : true
				});
			},

			_onSave : function() {
				var name = $(this.el).find("input.name-input").first().val();
				this.model.set({
					name : name,
					isEditing : false
				});
			},

			_onCancel : function() {
				this.model.set({
					isEditing : false
				});
			},

			_onDelete : function() {
				this.model.destroy();
			},

			// ビューをレンダリング。
			render : function() {
				// モデルを JSON に変換してからテンプレートに渡す。
				// { "name": this.model.get("name") } みたいに、
				// オブジェクトを渡してもいい。
				var data = this.model.toJSON();
				var html = this.template(data);
				$(this.el).html(html);
			}
		});

		// タスクリストを表示するビュー。
		var TaskListView = backbone.View.extend({
			// ビューをレンダリングする要素。
			el : $("#main"),

			events : {
				"click #add-input" : "_onAddInputClick"
			},

			initialize : function() {
				// モデル (TaskList) の要素数が変わったら再描画。
				this.model.bind("add", this.render, this);
				this.model.bind("remove", this.render, this);
			},

			_onAddInputClick : function() {
				var name = $("#name-input").val();
				if (_.isEmpty(name)) {
					alert("task name is empty.");
					return;
				}
				var task = new Task({
					"name" : name
				});
				this.model.add(task);
				$("#name-input").val("");
			},

			render : function() {
				var taskListEl = $("#task-list");
				taskListEl.empty();

				// Task と TaskView を1対1にする。
				// テンプレート内で for 文が使えるから、表示するだけなら
				// Task 1つ1つにビューを作る必要はない。
				// でも、1対1にしておいた方が、その場編集機能が実装しやすい。
				this.model.each(function(task) {
					var view = new TaskView({
						model : task
					});
					view.render();
					taskListEl.append(view.el);
				});
			}
		});

		// この views モジュールが公開するクラスを返す
		return {
			"TaskView" : TaskView,
			"TaskListView" : TaskListView
		};
	});
}(scutras.require.config));
