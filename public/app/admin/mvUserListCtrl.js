/*angular.module('app').controller('mvUserListCtrl', function ($scope, mvUser) {
	$scope.users = mvUser.query();
});*/

var mvUserListCtrl = function ($scope, mvUser) {
	$scope.users = mvUser.query();
};

mvUserListCtrl.$inject = ['$scope', 'mvUser'];

module.exports = mvUserListCtrl;