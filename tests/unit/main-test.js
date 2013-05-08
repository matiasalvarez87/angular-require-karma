
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

    requireModules.push('app');
    requireModules.push('mocks');

    console.log('requireModules');
    dump(requireModules);
 
    require({
        baseUrl: '/base/js/',
        paths: {
            'jquery': 'lib/jQuery/jquery-1.9.1.min',
            'angular': 'lib/angular/angular',
            'resource': 'lib/angular/angular-resource',
            'mocks': 'lib/angular/angular-mocks'
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
        console.log('err', err);

        if (failedModules && failedModules[0]) {
            throw new Error('The module cannot be loaded: ' + failedModules);
        } else {
            throw new Error('Unknown error:' + err);
        }
    });
}(window, require));
