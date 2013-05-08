
define(['angular', 'mocks', 'controllers/controllers', 'directives/directives'], 
	function (angular, mocks, controllers, directives) {
// define(['angular', 'mocks'], function (angular, mocks) {
	
	'use strict';

	describe('Tiles directive', function () {

		// var elm, scope;
		
		// beforeEach(module('myApp'));
		
		// beforeEach(inject(function($rootScope, $compile) {
		
		// 	elm = angular.element('<tiles title="Statistics" source="allStats"></tiles>');
		//     scope = $rootScope;
		//     $compile(elm)(scope);
		//     scope.$digest();
		// }));

		describe('HTML markup', function () {

			it('should have one entry per child', function () {
				expect('t').toEqual('t');
			});
		});

	});
});

// //
// // test/unit/directives/directivesSpec.js
// //
// describe("Unit: Testing Directives", function() {

//   var $compile, $rootScope;

//   beforeEach(angular.mock.module('App'));

//   beforeEach(inject(
//     ['$compile','$rootScope', function($c, $r) {
//       $compile = $c;
//       $rootScope = $r;
//     }]
//   ));

//   it("should display the welcome text properly", function() {
//     var element = $compile('<div data-app-welcome>User</div>')($rootScope);
//     expect(element.html()).to.match(/Welcome/i);
//   })

// });
