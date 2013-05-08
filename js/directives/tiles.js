/**
 * tiles.js
 **/

define([], function () {

    'use strict';

    // Directive controller

    function TilesController($scope) {

    }
    TilesController.$inject = ['$scope'];


    // Directive definition

    function btrTiles() {
        return {
            restrict: 'E',
            scope: {
                title: '@', // Its only a copy in the directive's scope
                source: '=' // Shares the same scope of its parent
            },
            templateUrl: 'partials/tiles.html',
            replace: true,
            controller: TilesController
        };
    }

    return btrTiles;
});