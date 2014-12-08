/*angular.module('app').controller('mvCourseDetailCtrl', function ($scope, $routeParams, mvCourse) {
	$scope.course = mvCourse.get({_id:$routeParams.id});
});*/

var mvCourseDetailCtrl = function ($scope, $routeParams, mvCourse) {
	$scope.course = mvCourse.get({_id:$routeParams.id});
};

mvCourseDetailCtrl.$inject = ['$scope', '$routeParams', 'mvCourse'];

module.exports = mvCourseDetailCtrl;