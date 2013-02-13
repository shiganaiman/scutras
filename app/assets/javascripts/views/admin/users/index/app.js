(function (scutras) {
	requirejs.config(scutras.require.config);
	require(["jquery", "underscore", "backbone", "models/users", "views/admin/users/index/views"],
	function($, _, backbone, users, views) {

		var userList = new users.UserList();
		userList.add(new users.User({id:1, account:"user1", name:"user1-name", editMode : scutras.em.EDIT_MODE.NONE }));
		userList.add(new users.User({id:2, account:"user2", name:"user1-name", editMode : scutras.em.EDIT_MODE.NONE  }));
		userList.add(new users.User({id:3, account:"user3", name:"user1-name", editMode : scutras.em.EDIT_MODE.NONE  }));
		userList.add(new users.User({id:4, account:"user4", name:"user1-name", editMode : scutras.em.EDIT_MODE.NONE  }));
		userList.add(new users.User({id:5, account:"user5", name:"user1-name", editMode : scutras.em.EDIT_MODE.NONE  }));
		userList.add(new users.User({id:6, account:"user6", name:"user1-name", editMode : scutras.em.EDIT_MODE.NONE  }));
		userList.add(new users.User({id:7, account:"user7", name:"user1-name", editMode : scutras.em.EDIT_MODE.NONE  }));
		userList.add(new users.User({id:8, account:"user8", name:"user1-name", editMode : scutras.em.EDIT_MODE.NONE  }));
		
		scutras.App = new views.UserListView({ model: userList });
		scutras.App.render();
	});
}(scutras));
