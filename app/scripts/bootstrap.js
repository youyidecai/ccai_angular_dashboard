define(['require',
        'angular',
        'jquery',
		'twitter',
        'app',
        'router',
        'services/serviceModule'
	],
	function(angular, domReady, app, permissions, router) {  
	    //让回调函数在页面DOM结构加载完成后再运行
		'use strict';
            //permissions.setPermissions(permissionList);   //当我把服务写在外面的时候显示没有这个函数
            require(['angular','domReady','app'], function(angular, domReady, app){
                var permissionList;
                /*app.run(function(permissions) {    //将permissions存放到factory变量中,使之一直处于内存中,实现全局变量的作用,但却没有污染命名空间
                    permissions.setPermissions(permissionList);
                });*///不太明白为什么必须使用回调函数服务才有效
                /*$.get('views/tableData.json', function(data) {
					permissionList = data;*/
					angular.bootstrap(document,['dashboardApp']);
				//});
            });
	});