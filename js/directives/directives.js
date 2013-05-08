/**
 * directives.js
 **/

define(['angular', 'directives/tiles'], function (angular, tiles) {
 		
 	    var directives = angular.module('directives', []);

        // header directives
 	    directives.directive('tiles', tiles);

 		return directives;
});