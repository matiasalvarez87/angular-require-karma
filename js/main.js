/**
 * main.js
 * Require.js configuration and initialization.
 **/

function bootstrap() {
	require(['angular', 'app', 'resource', 'routes', 
        'controllers/controllers', 'directives/directives', 'services/services'], function (angular, app) {

	        angular.element(document).ready(function (app) {
	            angular.bootstrap(document, ['myApp']);
	        });
	    }
	);
}

// require.js configuration
require.config({
    baseUrl: 'js/',
    paths: {
        'jquery': 'lib/jQuery/jquery-1.9.1.min',
        'angular': 'lib/angular/angular',
        'resource': 'lib/angular/angular-resource'
    },
    shim: {
        'jquery': { 'exports': '$' },
        'angular': { 'deps': ['jquery'], 'exports': 'angular' },
        'resource': { 'deps': ['angular'], 'exports': 'resource' }
    },

    callback: bootstrap
});


