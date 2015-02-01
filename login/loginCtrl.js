var app = angular.module('rtfmApp')

app.controller('loginCtrl', function($scope, environmentService, $location){
	$scope.env = environmentService.getEnv();

	$scope.logMeIn = function(username) {
		environmentService.saveUsername(username)
		$location.path('/threads')
	}
});
