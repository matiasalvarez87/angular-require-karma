/**
 * show.js
 **/

define(['angular'], function (angular) {

	'use strict';

	var service = function ($resource) {

		return $resource('data.json', {}, {
		    showInfo: { method: 'GET' }
		});

	};

	service.$inject = ['$resource'];

	return service;
});
