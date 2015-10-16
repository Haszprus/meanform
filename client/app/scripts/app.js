/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/moment/moment.d.ts" />
'use strict';
/**
 * @ngdoc overview
 * @name meanformApp
 * @description
 * # meanformApp
 *
 * Main module of the application.
 */
angular
    .module('meanformApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMessages',
    'ui.bootstrap.tpls',
    'ui.bootstrap.typeahead'
])
    .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
    })
        .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
    })
        .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
    })
        .otherwise({
        redirectTo: '/'
    });
});
//# sourceMappingURL=app.js.map