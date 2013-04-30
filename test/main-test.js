/**
 * main-test.js
 * Require.js configuration and initialization for testing purposes.
 **/

// var tests = Object.keys(window.__karma__.files).filter(function (file) {
//     return /Spec\.js$/.test(file);
// });

// // require.js configuration
// require.config({
//     baseUrl: "/Scripts/",
//     paths: {
//         "jquery": "lib/jQuery/jquery-1.9.1.min",
//         "angular": "lib/angular/angular",
//         "resource": "lib/angular/angular.resource.min"
//     },
//     shim: {
//         'jquery': { 'exports': '$' },
//         'angular': { 'deps': ['jquery'], 'exports': 'angular' },
//         'resource': { 'deps': ['angular'], 'exports': 'resource' }
//     },

//     // ask Require.js to load these files (all our tests)
//     deps: tests

//     /*// ask Require.js to load these files (all our tests)
//     deps: tests,

//     // start test run, once Require.js is done
//     callback: window.__karma__.start*/
// });

// require(['angular', 'app', 'routes', 'controllers/controllers'], function () {

//         window.__karma__.start();
//     }
// );

(function (window, require) {
    'use strict';
    var file, requireModules;
    requireModules = [];
 
   for (file in window.__karma__.files) {
        if (window.__karma__.files.hasOwnProperty(file)) {
            if (file.substring(file.length - 7, file.length) === 'Spec.js') {
                console.log('Added file to testing.. ' + file);
                requireModules.push(file);
            }
        }
    }
        
    // requireModules.push('angular');
    // requireModules.push('mocks');
    // requireModules.push('app');
    // requireModules.push('routes');
    requireModules.push('app');
    requireModules.push('mocks');

    console.log('requireModules');
    dump(requireModules);
 
    require({
        baseUrl: "/base/js/",
        paths: {
            "jquery": "lib/jQuery/jquery-1.9.1.min",
            "angular": "lib/angular/angular",
            "resource": "lib/angular/angular-resource",
            "mocks": "lib/angular/angular-mocks"
        },
        shim: {
            'jquery': { 'exports': '$' },
            'angular': { 'deps': ['jquery'], 'exports': 'angular' },
            'resource': { 'deps': ['angular'], 'exports': 'resource' },
            'mocks': { 'deps': ['angular'], 'exports': 'mocks' }
        }
    }, requireModules, function () {
        window.__karma__.start();
    }, function (err) {
        var failedModules = err.requireModules;
        console.log("err", err);

        if (failedModules && failedModules[0]) {
            throw new Error("Modul konnte nicht geladen werden: " + failedModules);
        } else {
            throw new Error("Unbekannter Fehler:" + err);
        }
    });
}(window, require));