/**
 *  route.js
 **/
define(['app', 'controllers/homeController'],
    function (app, HomeController) {

    return app.config(['$routeProvider',

        function ($routeProvider) {

            $routeProvider.
                when('/dashboard', { templateUrl: 'partials/home.html', controller: HomeController }).
                otherwise({ redirectTo: '/dashboard' });
        }
    ]);
});
