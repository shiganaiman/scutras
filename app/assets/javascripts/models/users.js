(function(scutras) {
	requirejs.config(scutras.require.config);
	define([ "underscore", "backbone" ], function(_, backbone) {
		var User = backbone.Model.extend({
			defaults : {
				id : null,
				account : "",
				name : "",
				password : "",
				email : "",
				editMode : scutras.em.EDIT_MODE.NEW,
				isSelected : false
			},

			destroy : function() {
				this.trigger("destroy", this);
			},

			validate : function(attrs) {
				if (_.isString(attrs.name) && _.isEmpty(attrs.name)) {
					return "name is empty.";
				}
				if (_.isString(attrs.account) && _.isEmpty(attrs.account)) {
					return "account is empty.";
				}
				if (_.isString(attrs.password) && _.isEmpty(attrs.password)) {
					return "password is empty.";
				}
				if (_.isString(attrs.email) && _.isEmpty(attrs.email)) {
					return "email is empty.";
				}
			}
		});

		var UserList = backbone.Collection.extend({
			model : User,

			initialize : function() {
				this.bind("add", this._onAdd, this);
			},

			_onAdd : function(user) {
				user.bind("destroy", this._onDestroy, this);
			},
			
			_onDestroy : function(user) {
				this.remove(user);
			}
		});
		
		return {
			"User" : User,
			"UserList" : UserList
		}; 

	});
	
	
}(scutras));
