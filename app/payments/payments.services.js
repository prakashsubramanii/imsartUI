'use strict';

angular.module('paymentApp').factory('paymentAppService', ['$http', '$window', '$rootScope','config',
  function ($http, $window, $rootScope, config) {

    var service = {};
    var spendCategories;


    service.getLoggedInUser = function () {
      return $window.localStorage['currentUsr'];
    }

    service.setLoggedInUser = function (username) {
      $window.localStorage['currentUsr'] = username;
    }
    
    service.getCustomers = function () {
      return $http({
        method: 'GET',
        type: 'JSON',
        url: config.url+'ISmart/api/customers/'
      });
    }

    service.getSpendCategories = function () {
      return $http({
        method: 'GET',
        type: 'JSON',
        url: config.url+'ISmart/api/customers/spendCategory/'
      });
    }

    service.setSpendCategoryOptions = function(categories){
      spendCategories = categories;
    }

    service.getSpendCategoryOptions = function(categories){
      return spendCategories;
    }

    service.payments = function (paymnetObj) {
      // var params = {
      //   page: 0,
      //   size: 5
      // }
      return $http({
        method: 'POST',
        type: 'JSON',
        data: paymnetObj,
        // params: params,
        url: config.url+'ISmart/api/customers/payments'
      });

    }

    return service;
  }]);
