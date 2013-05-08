/**
 * services.js
 **/
 
define(['angular', 'services/show'],
 	function (angular, show) {
 		
		var services = angular.module('services', ['ngResource']);

		services.factory('showService', show);

 		return services;
 	}
 );