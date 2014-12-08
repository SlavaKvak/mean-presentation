
//controllers
var mvMainCtrl = require('./main/mvMainCtrl');
var mvCourseListCtrl = require('./courses/mvCourseListCtrl');
var mvCourseDetailCtrl = require('./courses/mvCourseDetailCtrl');
var mvUserListCtrl = require('./admin/mvUserListCtrl');
var mvSignupCtrl = require('./account/mvSignupCtrl');
var mvProfileCtrl = require('./account/mvProfileCtrl');
var mvNavBarLoginCtrl = require('./account/mvNavBarLoginCtrl');

//services
var mvCourse = require('./courses/mvCourse');
var mvCashedCourses = require('./courses/mvCashedCourses');
var mvNotifier = require('./common/mvNotifier');
var mvUser = require('./account/mvUser');
var mvIdentity = require('./account/mvIdentity');
var mvAuth = require('./account/mvAuth');

var appModule = angular.module('app', ['ngResource', 'ngRoute'])
	.controller('mvMainCtrl', mvMainCtrl)
	.controller('mvCourseListCtrl', mvCourseListCtrl)
	.controller('mvCourseDetailCtrl', mvCourseDetailCtrl)
	.controller('mvUserListCtrl', mvUserListCtrl)
	.controller('mvSignupCtrl', mvSignupCtrl)
	.controller('mvProfileCtrl', mvProfileCtrl)
	.controller('mvNavBarLoginCtrl', mvNavBarLoginCtrl)
	.factory('mvCourse', mvCourse)
	.factory('mvCashedCourses', mvCashedCourses)
	.value('mvToastr', toastr)
	.factory('mvNotifier', mvNotifier)
	.factory('mvUser', mvUser)
	.factory('mvIdentity', mvIdentity)
	.factory('mvAuth', mvAuth);

appModule.config(function ($routeProvider, $locationProvider) {
	var routeRoleChecks = {
		admin: {auth: function (mvAuth) {
			return mvAuth.authorizeCurrentUserForRoute('admin');
		}},
		user: {auth: function (mvAuth) {
			return mvAuth.authorizeAuthenticatedUserForRoute();
		}}
	};

	$locationProvider.html5Mode({
  		enabled: true,
  		requireBase: false
	});
	$routeProvider
		.when('/', {
			templateUrl: '/partials/main/main',
			controller: 'mvMainCtrl'
		})
		.when('/admin/users', {
			templateUrl: '/partials/admin/user-list',
			controller: 'mvUserListCtrl',
			resolve: routeRoleChecks.admin
		})
		.when('/signup', {
			templateUrl: '/partials/account/signup',
			controller: 'mvSignupCtrl'
		})
		.when('/profile', {
			templateUrl: '/partials/account/profile',
			controller: 'mvProfileCtrl',
			resolve: routeRoleChecks.user
		})
		.when('/courses', {
			templateUrl: '/partials/courses/course-list',
			controller: 'mvCourseListCtrl'
		})
		.when('/courses/:id', {
			templateUrl: '/partials/courses/course-details',
			controller: 'mvCourseDetailCtrl'
		});
});

appModule.run(function ($rootScope, $location) {
	$rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
		if (rejection === 'not authorized') {
			$location.path('/');
		}
	});
});

