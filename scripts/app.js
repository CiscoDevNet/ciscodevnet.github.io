'use strict';

/**
 * @ngdoc overview
 * @name ciscogithubioApp
 * @description
 * # ciscogithubioApp
 *
 * Main module of the application.
 */
angular
  .module('devnetApp', [
    'ngResource',
    'ngRoute',
    'angularUtils.directives.dirPagination',
    'projectGridDirective'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:name*', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/sample-code'
      });
  });
