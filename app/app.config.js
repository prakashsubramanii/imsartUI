'use strict';

angular.
  module('iSmartApp').
  config(['$routeProvider','$locationProvider',
    function config($routeProvider,$locationProvider) {

      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/transactions', {
          controller: 'smartController',
          template: '<menu-list></menu-list><h1>Transactions</h1>'
        }).
        when('/payments', {
          controller: 'smartController',
          templateUrl:  'payments/payments.html'
        }).  
        when('/analytics', {
          controller: 'smartController',
          template:  '<menu-list></menu-list><h1>Analytics</h1>'
        }).
        otherwise('/transactions');
    }
  ]);
