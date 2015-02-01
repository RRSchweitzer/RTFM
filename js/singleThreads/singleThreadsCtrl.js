var app = angular.module('rtfmApp')

	app.controller('singleThreadsCtrl', function($rootScope, $scope, threadRef, commentsRef){

		var thread = threadRef.$asObject();
		console.log(thread);

		thread.$bindTo($scope, 'thread');


		$scope.comments = commentsRef.$asArray();

		console.log($scope.thread)

		$scope.createComment = function(text) {
			$scope.comments.$add({
				username: $rootScope.username,
				text: text
			});
			$scope.newCommentText = "";
		}

	});