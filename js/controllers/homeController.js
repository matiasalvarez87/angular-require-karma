/**
 * homeController.js
 **/

define(function () {

    'use strict';

    function HomeController($scope, $Show) {

        $scope.name = 'Matias';

        $scope.allStats = [
            { 'title': 'Total Listens', 'value': '1045858' },
            { 'title': 'Live Listens', 'value': '100520' },
            { 'title': 'Profile Views', 'value': '442507' }
        ];

		$scope.greetings = function() {
			$scope.title = 'Hello ' + $scope.name;
		};

        $Show.showInfo(function (data) {
            $scope.serviceData = data;
        });
    }

    HomeController.$inject = ['$scope', 'showService'];

    return HomeController;
});