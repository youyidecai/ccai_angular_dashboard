'use strict';

/* Controllers */

define(['controllers/controllerModule'],
       function(dashboardControllers){
        dashboardControllers.controller('sidebarCtrl', ['$scope', '$state', '$http',
          function($scope, $state, $http) {
            var vm = this;
			vm.tree = [
					   {
					      "id":"1",
					      "pid":"0",
					      "name":"家用电器",
					      "children":[
					         {
					            "id":"4",
					            "pid":"1",
					            "name":"大家电"
					         },
                             {
                                "id":"7",
                                "pid":"4",
                                "name":"空调"
                             },
                             {
                                  "id":"15",
                                  "pid":"7",
                                  "name":"海尔空调"
                              },
                             {
                                "id":"8",
                                "pid":"4",
                                "name":"冰箱"
                             },
                             {
                                "id":"9",
                                "pid":"4",
                                "name":"洗衣机"
                             },
                             {
                                "id":"10",
                                "pid":"4",
                                "name":"热水器"
                             }
					      ]
					   },
                       {
                            "id":"5",
                            "pid":"1",
                            "name":"生活电器",
                            "children":[
                               {
                                  "id":"19",
                                  "pid":"5",
                                  "name":"加湿器"
                               },
                               {
                                  "id":"20",
                                  "pid":"5",
                                  "name":"电熨斗"
                               }
                            ]
                        },
					    {
					      "id":"2",
					      "pid":"0",
					      "name":"服饰",
					      "children":[
					         {
					            "id":"13",
					            "pid":"2",
					            "name":"男装"
					         },
					         {
					            "id":"14",
					            "pid":"2",
					            "name":"女装"
					         }
					      ]
					   },
					   {
					      "id":"3",
					      "pid":"0",
					      "name":"化妆",
					      "children":[
					         {
					            "id":"11",
					            "pid":"3",
					            "name":"面部护理"
					         },
					         {
					            "id":"12",
					            "pid":"3",
					            "name":"口腔护理"
					         }
					      ]
					   }
					];
			vm.itemClicked = function($item) {
				vm.selectedItem = $item;
				console.log($item, 'item clicked');
			};

			vm.itemCheckedChanged = function($item) {
				$http.post('/url', $item);
				console.log($item, 'item checked');
			};

			return vm;
      }])
           
        });