'use strict';

/* Controllers */

define(['controllers/controllerModule','services/serviceModule'],
       function(dashboardControllers){
        dashboardControllers.controller('loginCtrl', ['$scope', '$state', '$http', '$cookieStore', 'ServiceConfig',
          function(a, b, c, d, e) {
            a.login = function() {
                var username = a.username,
                    pwd = a.password,
                    info = {username: username, password: pwd};
                c.post(e.user_login, info).success(function(data) {
                    if (data.status) {
                        d.put("user", data);
                        b.go();
                    } else {
                        //提示忘记密码
                    }
                }).error(function() {
                    //服务出错
                });
            },
            a.goRegister = function() {
                b.go(register);  
            }
        }])
        dashboardControllers.controller('registerCtrl', ['$scope', '$state', '$http', '$cookieStore', '$state', 'ServiceConfig',
          function(a, b, c, d, e, f) {
            a.register = function() {
                var g = a.username,
                    h = a.password,
                    i = a.re_password,
                    arr = {username:　f, password: g, repeatPassword: h};
                if (!username || !pwd || !repwd) {
                    //提示用户名、密码不能为空
                }
                if (pwd !== repwd) {
                    //提示两次密码输入不一致
                }
                $http.post(f.user_register, arr).success(function(data) {
                    if (data.status) {
                        d.put("user", data),
                        b.go();
                    } else {
                        //提示注册失败
                    }
                }).error(function() {
                    //服务出错
                });
            },
            a.goLogin = function() {
                b.go(login);  
            }
        }]);
});