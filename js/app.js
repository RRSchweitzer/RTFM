var app = angular.module('rtfmApp', ['ngRoute', 'firebase'])

	app.config(function($routeProvider) {
		$routeProvider
			.when('/login', {
				templateUrl: 'login/loginTmpl.html',
				controller: 'loginCtrl'
			})
			.when('/threads', {
				templateUrl: 'js/threads/threadsTmpl.html',
				controller: 'threadsCtrl',
				resolve: {
					threadsThing: function(threadsService) {
						return threadsService.getThreads();
					}
				}
			})
			.when('/threads/:threadId', {
				templateUrl: 'js/singleThreads/singleThreadsTmpl.html',
				controller: 'singleThreadsCtrl',
					resolve: {
					threadRef: function (threadsService, $route) {
      			return threadsService.getSingleThread($route.current.params.threadId);
      		},
      		commentsRef: function (threadsService, $route) {
      			return threadsService.getComments($route.current.params.threadId)
      		}
				}
			})
			.otherwise('/login');
	});
	//this function protects our routes if username/password is not correct
	app.run(function($rootScope, $location, environmentService){
		$rootScope.$on('$routeChangeStart', function (event, next, current){
			if(environmentService.getUsername()) {
				$rootScope.username = environmentService.getUsername()
			}
			else {
				$location.path('/login');
			}
		})
	})




