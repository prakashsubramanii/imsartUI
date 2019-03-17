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

    
    service.getTimeRangeData = function (timeRange, sdate, edate) {

      var redirectUrls;

      if ( timeRange === 'periodic'){

          if ( sdate === null || sdate === undefined || edate === null || edate === undefined )
                return;

        redirectUrls='ISmart/api/transactions/periodic/'+$window.localStorage['currentUsr']

        var params = {
          startDate: sdate,
          endDate: edate
        }

        return $http({
          method: 'GET',
          type: 'JSON',
          params: params,
          url: config.url+redirectUrls
        });

      }
      else{
        return $http({
          method: 'GET',
          type: 'JSON',
          url: config.url+'ISmart/api/transactions/current/'+$window.localStorage['currentUsr']
        });
      }

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
