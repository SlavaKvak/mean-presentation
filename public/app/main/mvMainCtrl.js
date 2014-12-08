//angular.module('app').controller('mvMainCtrl', function ($scope, mvCashedCourses) {
//	$scope.courses = mvCashedCourses.query();
//});

var mvMainCtrl = function ($scope, mvCashedCourses) {
	$scope.courses = mvCashedCourses.query();
};

mvMainCtrl.$inject = ['$scope', 'mvCashedCourses'];

module.exports = mvMainCtrl;