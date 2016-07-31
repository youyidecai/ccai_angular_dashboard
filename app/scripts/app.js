define(['angular','ngResource','ngRouter', 'ngStorage', 'ngCookies','controllers/controllerModule','directives/directiveModule','services/serviceModule','controllers/mainControllers','directives/mainDirectives','services/mainServices'],
	function(angular){
		return angular
				.module('dashboardApp',['ui.router','ngResource','ngStorage', 'ngCookies','dashboardControllers','dashboardDirectives','dashboardServices'])
				//.run(function(permissions){
				//	permissions.setPermissions(permissionList);
				//	});
	});
