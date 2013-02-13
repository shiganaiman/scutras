(function (r) {
	requirejs.config(r);
	define(["underscore", "backbone"], function( _, backbone) {
		var Task = backbone.Model.extend({
	         // 初期値を指定。
	         // new でオブジェクトを生成したとき、まずこの値が attributes に格納される。
	         defaults: {
	             name: "",
	             completed: false,
	             isEditing: false
	         },
	                
	         // destroy をオーバーライド。
	         // 本来ならサーバーと通信するけど、今回のサンプルではデータを永続化しないから、
	         // destroy イベントだけ発生させる。
	         destroy: function() {
	             this.trigger("destroy", this);
	         },

	         // set メソッドに渡されたデータを検証する。
	         // 何か値を返すと検証エラー扱いになるので、
	         // 不正な値だったときはエラーメッセージなんかを返すといい。
	         validate: function(attrs) {
	             // 検証には、underscore の便利メソッドを使っている。
	             if (_.isString(attrs.name) && _.isEmpty(attrs.name)) {
	                 return "task name is empty.";
	             }
	         }
	     });
	});
}(myGlobalRequire));



