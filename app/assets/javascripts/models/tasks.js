(function(r) {
	requirejs.config(r);
	define([ "underscore", "backbone" ], function(_, backbone) {
		// タスクを表すクラス。
		// タスクのデータを格納するモデルなので、Backbone.Model を継承。
		var Task = backbone.Model.extend({
			// 初期値を指定。
			// new でオブジェクトを生成したとき、まずこの値が attributes に格納される。
			defaults : {
				name : "",
				completed : false,
				isEditing : false
			},

			// destroy をオーバーライド。
			// 本来ならサーバーと通信するけど、今回のサンプルではデータを永続化しないから、
			// destroy イベントだけ発生させる。
			destroy : function() {
				this.trigger("destroy", this);
			},

			// set メソッドに渡されたデータを検証する。
			// 何か値を返すと検証エラー扱いになるので、
			// 不正な値だったときはエラーメッセージなんかを返すといい。
			validate : function(attrs) {
				// 検証には、underscore の便利メソッドを使っている。
				if (_.isString(attrs.name) && _.isEmpty(attrs.name)) {
					return "task name is empty.";
				}
			}
		});

		// タスクリストを表すクラス。
		// タスクのコレクションを扱うので、Backbone.Collection を継承。
		var TaskList = backbone.Collection.extend({
			// コレクションが扱うモデルの型。
			// 指定しなくてもいいけど、指定しておくと add に Task 以外のオブジェクトが
			// 渡されたときラップしてくれる。
			model : Task,

			// 初期化。
			initialize : function() {
				// タスクリストにタスクが追加されたときに発生する add イベントに
				// ハンドラを登録する。
				this.bind("add", this._onAdd, this);
			},

			_onAdd : function(task) {
				task.bind("destroy", this._onDestroy, this);
			},

			// タスクが destroy イベントを発生させたらタスクリストから削除する。
			_onDestroy : function(task) {
				this.remove(task);
			}
		});

		// この models モジュールが公開するクラスを返す
		return {
			"Task" : Task,
			"TaskList" : TaskList
		};
	});
}(scutras.require.config));
