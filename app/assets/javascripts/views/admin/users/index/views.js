(function(scutras) {
	requirejs.config(scutras.require.config);
	define([ "jquery", "bootstrap", "underscore", "backbone", "models/users" ], function($, bootstrap, _, backbone, users) {
		
		var User = users.User;
		var UserList = users.UserList;

		var UserEdit = backbone.View.extend({
			tagName : "div",
			template : _.template($("#user-view-template").html()),

			events : {
				"click #create" : "_onCreateClick",
				"click #update" : "_onUpdateClick",
				"click #delete" : "_onDeleteClick",
				"click #cancel" : "_onCancelClick"
			},

			initialize : function() {
				this.model.bind("change", this.render, this);
				this.model.bind("error", this._onError, this);
			},
			
			render : function() {
				var userEditEl = $("#user-edit");
				userEditEl.empty();
				if (this.model.get("isSelected")){
					var data = this.model.toJSON();
					var html = this.template(data);
					$(this.el).html(html);
					userEditEl.append(this.el);
				}
				return this;
			},

			_onError : function(model, error) {
				alert(error);
			},

			_onCreateClick : function() {
				this.model.set({
					id : $("#input-id").val(),
					account : $("#input-account").val(),
					name : $("#input-name").val(),
					password : $("#input-password").val(),
					email : $("#input-email").val(),
					editMode : scutras.em.EDIT_MODE.ADD,
					isSelected :false
				});
			},

			_onUpdateClick : function() {
				
				this.model.set({
					id : $("#input-id").val(),
					account : $("#input-account").val(),
					name : $("#input-name").val(),
					password : $("#input-password").val(),
					email : $("#input-email").val(),
					editMode : scutras.em.EDIT_MODE.MODIFY,
					isSelected :false
				});
			},

			
			_onCancelClick : function() {
				if (this.model.get("editMode") == scutras.em.EDIT_MODE.NEW ){
					this.model.collection.remove(this.model);
				}
				this.model.set({
					isSelected:false
				});
				this.render();
			},

			_onDeleteClick : function() {
				var model = this.model;
				$("#deleteModal").modal("show");
				
				$("#deleteModel-cancel").click(function(){
					$("#deleteModal").modal("hide");
				});
				
				$("#deleteModel-delete").click(function(){
					if (model.get("editMode") != scutras.em.EDIT_MODE.NEW){
						model.set({
							editMode : scutras.em.EDIT_MODE.REMOVE,
							isSelected:false
						});
					}else{
						model.set({
							isSelected:false
						});
					}
					$("#deleteModal").modal("hide");
					this.render();
				});
			}

		});
		
		
		var UserRecodeView = backbone.View.extend({
			tagName: "tr",
			template : _.template($("#user-list-tr-template").html()),
			events : {
				"click .user-list-tr-edit" : "_onUserEditClick"
			},
			
			initialize : function() {
				this.model.bind("change", this.render, this);
			},

			render : function() {
				var data = this.model.toJSON();
				var html = this.template(data);
				$(this.el).html(html);
			},
			
			_onUserEditClick : function() {
				this.model.collection.each(function(user){
					user.set({
						isSelected:false
					})
				});
				this.model.set({
					isSelected:true
				})
				var view = new UserEdit({model : this.model});
				view.render();
			}

		});
			
		
		var UserListView = backbone.View.extend({

			el : $("#user-main"),

			events : {
				"click #add-user" : "_onAddUserClick"
			},

			initialize : function() {
				this.model.bind("change", this.render, this);
				this.model.bind("add", this.render, this);
				this.model.bind("remove", this.render, this);
				this.model.bind("reset", this.render, this);
			},
			
			render : function() {
				var template = this.template;
				var userListEl = $("#user-list");
				userListEl.empty();
				
				this.model.each(function(user) {
					var userRecodeView = new UserRecodeView({model:user	});
					userRecodeView.render();
					userListEl.append(userRecodeView.el);
					if (user.get("isSelected")){
						var view = new UserEdit({model : user});
						view.render();
					}
				});
			},
			
			_onAddUserClick : function() {
				this.model.each(function(user){
					user.set({
						isSelected:false
					})
				});
				var user = new User({isSelected:true});
				var view = new UserEdit({model : user});
				view.render();
				this.model.add(user);
			}

		});

		
		return {
			UserEdit:UserEdit,
			UserListView : UserListView
		};
	});
}(scutras));
