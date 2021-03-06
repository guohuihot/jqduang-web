'use strict';

/**
 * @ngdoc overview
 * @name jqduangWebApp
 * @description
 * # jqduangWebApp
 *
 * Main module of the application.
 */
angular
  .module('jqduangWebApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/jqduang', {
        templateUrl: 'views/jqduang.html',
        controller: 'JqduangCtrl',
        controllerAs: 'jqduang'
      })
      .when('/jqvalidate', {
        templateUrl: 'views/jqvalidate.html',
        controller: 'JqvalidateCtrl',
        controllerAs: 'jqvalidate'
      })
      .when('/jqmodal', {
        templateUrl: 'views/jqmodal.html',
        controller: 'JqmodalCtrl',
        controllerAs: 'jqmodal'
      })
      .when('/jqgallery', {
        templateUrl: 'views/jqgallery.html',
        controller: 'JqgalleryCtrl',
        controllerAs: 'jqgallery'
      })
      .when('/jqfixed', {
        templateUrl: 'views/jqfixed.html',
        controller: 'JqfixedCtrl',
        controllerAs: 'jqfixed'
      })
      .when('/jqscrollspy', {
        templateUrl: 'views/jqscrollspy.html',
        controller: 'JqscrollspyCtrl',
        controllerAs: 'jqscrollspy'
      })
      .when('/jqsimulation', {
        templateUrl: 'views/jqsimulation.html',
        controller: 'JqsimulationCtrl',
        controllerAs: 'jqsimulation'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
