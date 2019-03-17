'use strict';

angular.module('transactions').factory('transactionsService', ['$http', '$window', '$rootScope', 'config','paymentAppService',
  function ($http, $window, $rootScope, config, paymentAppService) {

    var service = {};
    
    // service.viewDetails = function (policyid) {
    //   return $http({
    //     method: 'GET',
    //     type: 'JSON',
    //     url: 'policies/'+policyid+'.json'
    //   });
    // }

    
    service.getTimeRangeData = function () {
      return $http({
        method: 'GET',
        type: 'JSON',
        url: config.url+'ISmart/api/customers/spendCategory/'
      });
    }
    
    // service.searchpolicyList = function (petObj) {
    //   var params = {
    //     page: 0,
    //     size: 5
    //   }
    //   return $http({
    //     method: 'POST',
    //     type: 'JSON',
    //     data: petObj,
    //     params: params,
    //     url: 'http://13.234.118.1:9090/PetPeers/api/pets/filter'
    //   });

    // }

    return service;
  }]);
