/*angular.module('app').controller('mvCourseListCtrl', function ($scope, mvCashedCourses) {
	$scope.courses = mvCashedCourses.query();

	$scope.sortOptions = [{value:"title", text:"Sort by Title"},
			{value: "published", text:"Sort by Publish Date"}];

	$scope.sortOrder = $scope.sortOptions[0].value;
});*/

var mvCourseListCtrl = function ($scope, mvCashedCourses) {
	$scope.courses = mvCashedCourses.query();

	$scope.sortOptions = [{value:"title", text:"Sort by Title"},
			{value: "published", text:"Sort by Publish Date"}];

	$scope.sortOrder = $scope.sortOptions[0].value;
};

mvCourseListCtrl.$inject = ['$scope', 'mvCashedCourses'];

module.exports = mvCourseListCtrl;