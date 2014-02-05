'use strict';

angular.module('dgcoffmangithubioApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(false);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/resume', {
        templateUrl: 'views/resume.html',
        controller: 'MainController'
      })
      .when('/writing/', {
        templateUrl: 'views/resume.html',
        controller: 'BlogController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
