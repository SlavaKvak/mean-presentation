/*angular.module('app').controller('mvSignupCtrl', function ($scope, $location, mvAuth, mvNotifier) {
	
	$scope.signup = function(){
		var newUserData = {
			username: $scope.email,
			password: $scope.password,
			firstName: $scope.fname,
			lastName: $scope.lname
		};	

		mvAuth.createUser(newUserData).then(function () {
			mvNotifier.notify('User account created!');
			$location.path('/');
		}, function (reason) {
			mvNotifier.error(reason);
		});
	}
});*/

var mvSignupCtrl = function ($scope, $location, mvAuth, mvNotifier) {
	$scope.signup = function() {
		var newUserData = {
			username: $scope.email,
			password: $scope.password,
			firstName: $scope.fname,
			lastName: $scope.lname
		};	

		mvAuth.createUser(newUserData).then(function () {
			mvNotifier.notify('User account created!');
			$location.path('/');
		}, function (reason) {
			mvNotifier.error(reason);
		});
	}
};

mvSignupCtrl.$inject = ['$scope', '$location', 'mvAuth', 'mvNotifier'];

module.exports = mvSignupCtrl;