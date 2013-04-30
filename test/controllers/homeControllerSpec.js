
define(['angular', 'mocks', 'controllers/homeController'], function (angular, mocks, HomeController) {
	
	'use strict';

	describe('HomeController', function () {

		var scope, ctrl;

		beforeEach( inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			ctrl = $controller(HomeController, {$scope: scope});
	    }));

		describe('Testing default variables', function () {

			it('should has only one default variable', function () {
				expect(scope.name).toEqual('Matias');
				expect(scope.title).toEqual(undefined);
			});
		});

		describe('Testing methods', function () {

			it('should define the title variable after call greetings method', function () {
				expect(scope.title).toEqual(undefined);
				scope.greetings();
				expect(scope.title).toEqual('Hello Matias');
			});

			it('should change the title after chaging the name', function () {
				scope.name = 'Juan';
				scope.greetings();
				expect(scope.title).toEqual('Hello Juan');
			});
		});

	});
});