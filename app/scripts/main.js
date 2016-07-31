// 定义RequireJS设置
require.config({
	paths: {
		angular: '../vendor/lib/angular',
		jquery: '../vendor/lib/jquery',
		domReady: '../vendor/lib/domReady',
		twitter: '../vendor/lib/bootstrap',
		ngRouter: '../vendor/lib/angular-ui-router',
		ngResource: '../vendor/lib/angular-resource',
		ngStorage: '../vendor/angular/ngstorage/ngStorage',
		ngCookies: '../vendor/angular/angular-cookies/angular-cookies',
		jqueryUniform: '../vendor/lib/jquery.uniform.min',
		flatui: '../vendor/flatui/dist/js/flat-ui',
		baseApp: '../vendor/app',
		bootstrap: 'bootstrap',
		app: 'app',
		router: 'router'
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		jquery: {
			exports:'jquery'
		},
		twitter: {
			deps: ['jquery'],
			exports: 'twitter'
		},
		ngRouter: {
			deps: ['angular'],
			exports: 'ngRouter'
		},
		ngResource: {
			deps: ['angular'],
			exports: 'ngResource'
		},
		ngStorage: {
			deps: ['angular'],
			exports: 'ngStorage'
		},
		ngCookies: {
			deps: ['angular'],
			exports: 'ngCookies'
		},
		jqueryUniform: {
			deps: ['jquery'],
			exports: 'jqueryUniform'
		},
		flatui: {
			deps: ['jquery','jqueryUniform'],
			exports: 'flatui'
		},
		baseApp: {
			deps: ['jquery'],
			exports: 'baseApp'
		}
	},
	deps: ['bootstrap'],
	urlArgs: "bust=" + (new Date()).getTime() //每次调式时候就不会读取缓存了,只是用于调试，在环境中请删除
});
//require([
//	'angular',
//	'jquery',
//	'app',
//	'router',
//	'services/serviceModule'
//	],
//	function(angular, domReady, app) {  
//	    //让回调函数在页面DOM结构加载完成后再运行
//		'use strict';
//		
//			//var permissionList;
//			//
//			//app.run(function(permissions) {
//			//  permissions.setPermissions(permissionList);
//			//});
//	  
//			domReady(function() {
//				$.get('views/tableData.json', function(data) {
//					permissionList = data;
//					angular.bootstrap(document,['dashboardApp']);
//				});
//			});
//		
//	}
//	);