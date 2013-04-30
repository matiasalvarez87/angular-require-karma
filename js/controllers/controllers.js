/**
 * Base Controller
 **/ 

define(['angular', 'controllers/homeController'],

 	function (angular, HomeController) {
 		
 		var controllers = angular.module('controllers', []);

 		controllers.controller('homeController', HomeController);

 		return controllers;
 	}
);