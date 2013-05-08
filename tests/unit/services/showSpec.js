
define(['angular', 'services/show', 'mocks', 'resource'], function (angular, ShowService) {

	'use strict';

	describe('Show service', function () {

		var app, $Show, $http;

		// Initialize module and register service to be tested
		beforeEach(function () {

			// Creates a fake module
			app = angular.module('myApp', ['ngResource']);

			// Resgiter the service on the fake module
			app.factory('showService', ['$resource', ShowService]); // Pass the dependencies for the service

			// Loads testing configurations for the module
			angular.mock.module('myApp');
		});

		// Cache injected variables & mock server response
		beforeEach (inject (function($httpBackend, showService) {

			// Cache services to make them accesible for the unit tests
			$http = $httpBackend;
			$Show = showService;
			
			// Mock server response
			$httpBackend.when('GET', 'data.json').respond( { userId: 'userX', collection: [0, 1, 2] } );
		}));


		it('should work', function () {

			// Calls the service method
			var json = $Show.showInfo();

			// Flush httpBackend service in order to make it sync: http://docs.angularjs.org/api/ngMock.$httpBackend
			$http.flush();

			expect(json.userId).toBe('userX');
			expect(json.collection.length).toBe(3);
		});

	});
});