define(['directives/directiveModule','jquery'],
	function(dashboardDirectives){
	dashboardDirectives.directive('treeView',function(){
		return {
			restrict: 'E',
			templateUrl: '/treeView.html',
            scope: {    //该指令中，无法调用外部控制器中的数据监听，是由于作用域的问题
                treeData: '=',
                canChecked: '=',
                textField: '@',
                itemClicked: '&',
                itemCheckedChanged: '&',
                itemTemplateUrl: '@'
            },
			controller: ['$scope', function($scope) {
                $scope.itemExpended = function(item, $event) {
                    item.$$isExpend = !item.$$isExpend;
                    $event.stopPropagation();
                };
                
                $scope.isLeaf = function(item) {
                	return !item.children || !item.children.length;
                };
                
                $scope.wrapCallback = function(callback, item, $event) {
                	($scope[callback] || angular.noop)({
                		$item: item,
                		$event: $event
                	});
                };
            }]
		};
	});
});