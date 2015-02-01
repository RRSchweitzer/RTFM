var app = angular.module('rtfmApp')

	app.controller('threadsCtrl', function($rootScope,$scope, threadsService, environmentService, $location, threadsThing){
		$scope.test = "Hi";

		$scope.threads = threadsThing.$asArray();
		
		$scope.threads.$loaded().then(function(){
			console.log($scope.threads);
		})
	
		$scope.logMeOut = function() {
			environmentService.logOut()
			$location.path('/login')
		}

		$scope.createThread = function(username, title) {
			  $scope.threads.$add({
        username: $rootScope.username,
        title: title
			});
		}

	});