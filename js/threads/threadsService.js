var app = angular.module('rtfmApp')

	app.service('threadsService', function($firebase, environmentService){

		var firebaseUrl = environmentService.getEnv().firebase;

		this.getThreads = function() {
			return $firebase(new Firebase(firebaseUrl + '/threads'));
		}
		this.getSingleThread = function(id) {
			return $firebase(new Firebase(firebaseUrl + '/threads/' + id))
		}
		this.getComments = function(id) {
			return $firebase(new Firebase(firebaseUrl + '/threads/' + id + '/comments'))
		}
			// //firebase formulas:
			// //Use thing and not ref..
			// var url = environmentService.getEnv().firebase;
			// //var ref = new Firebase(url) //javascript (a constructor)
			// var thing = $firebase(ref) //angular
			// var thingObject = thing.$asObject();
			// var thingArray = thing.$asArray();

	})