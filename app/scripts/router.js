define(['app'],
	function(app){
		return app.run([
						'$rootScope',
						'$state',
						'$location',
						'$stateParams',
						function($rootScope, $state, $location, $stateParams){
							$rootScope.$state = $state;
							$rootScope.$stateParams = $stateParams;

							$rootScope.path = $location.path();

							$rootScope.$on('$rootChangeSuccess',function(newVal){
								$rootScope.path = $location.path();
							});
						}
					])

					.config(function($stateProvider, $urlRouterProvider, $locationProvider){
						$urlRouterProvider
							.otherwise('app');
						$stateProvider
						.state('app', {
							//abstract: true,
							url: '/app',
							templateUrl: 'views/app.html'
						})
						.state('app.content1', {
							url: '/content1',
							templateUrl: 'views/content1.html'
						})
						.state('app.content2', {
							url: '/content2',
							templateUrl: 'views/content2.html'
						})
						.state('app.content3', {
							url: '/content3',
							templateUrl: 'views/content3.html'
						})
						.state('append', {
							url: '/append',
							template: '<div ui-view class="fade-in-right-big smooth"></div>'
						})
						.state('append.login', {
							url: '/login',
							templateUrl: 'views/page_login.html'
						});
					});
	});