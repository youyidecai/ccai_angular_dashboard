define(['services/serviceModule'],function(dashboardServices, $){
    'use strict';
    dashboardServices.constant('ServiceConfig',
    {
        user_login: 'user_login.json'
    });
    dashboardServices
    .factory('authorizationService', function($resource, $q, $rootScope, $location){
        return {
            permissionModel: {permission: {}, isPermissionLoaded: false}, //将权限缓存到Session
            permissionCheck: function(roleCollection) {
                var deferred = $q.defer(); //返回一个promise
                var parentPointer = this;  //保存一个指向上层作用域的指针
                if (this.permissionModel.isPermissionLoaded) {
                    this.getPermission(this.permissionModel, roleCollection, deferred);
                } else {
                    $resource('').get().$promise.then(function(response) {
                        parentPointer.permissionModel.permission = response;  //填充对象
                        parentPointer.permissionModel.isPermissionLoaded = true;
                        parentPointer.getPermission(parentPointer.permissionModel);
                    });
                }
            },
            getPermission: function(permissionModel, roleCollection, deferred) {
                var ifPermissionPassed = false;
                
                angular.forEach(roleCollection, function(role) {
                    switch(role) {
                        case roles.superUser:
                            if (permissionModel.permission.isSuperUser) {
                                ifPermissionPassed = true;
                            }
                            break;
                        case roles.admin:
                            if (permissionModel.permission.isAdministractor) {
                                ifPermissionPassed = true;
                            }
                            break;
                        case roles.user:
                            if (permissionModel.permission.isUser) {
                                ifPermissionPassed = true;
                            }
                            break;
                        default:
                            ifPermissionPassed = false;
                    }
                });
                
                if (!ifPermissionPassed) {
                    $location.path(routeForUnauthorizedAccess);
                    $rootScope.$on('$lcationChangeSuccess', function(next, current) {
                        deferred.resolve();
                    });
                } else {
                    deferred.resolve();
                }
            }
        }
    })
})