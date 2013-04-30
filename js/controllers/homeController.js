/**
 * homeController.js
 **/

define(function () {

    'use strict';

    function HomeController($scope) {

        $scope.name = 'Matias';

		$scope.greetings = function() {
			$scope.title = 'Hello ' + $scope.name;
		};
    }

    HomeController.$inject = ['$scope'];

    return HomeController;
});