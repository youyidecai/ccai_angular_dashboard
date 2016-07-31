define(['services/serviceModule'],function(dashboardServices, $){
    'use strict';
    dashboardServices
    .factory('permissions', function($rootScope){
        var permissionList;
        return {
            setPermissions: function(permissions){
                permissionList = permissions;
                $rootScope.$broadcast('permissionsChanged');  /*通过$broadcast广播事件,当权限发生变更的时候.*/
            }
        }
        })
    })