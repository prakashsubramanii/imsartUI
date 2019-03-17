'use strict';

var transactions = angular.module('transactions', ['ui.bootstrap']);

transactions.controller('transactionsController', ['$http','$scope', '$rootScope', '$location', '$uibModal', 'config','transactionsService','paymentAppService',
    function ($http, $scope, $rootScope, $location, $uibModal, config, transactionsService,paymentAppService) {
        
        //config.url+'einsure/policies/'
        $http.get('phones/transactions.json').then(function (response) {
                $scope.transactions = response.data;
        });
        
        $scope.categories = paymentAppService.getSpendCategoryOptions();
        $scope.category;

        if ( $scope.categories === undefined ){
                paymentAppService.getSpendCategories()
                .then(
                    function (success) {
                        $scope.categories = success.data;
                        paymentAppService.setSpendCategoryOptions($scope.categories);
                    },
                    function (error) {
                        alert('Error getting the spend categories');
                    }); 
        }

        $scope.options = [
            { type: 'Current' },
            { type: 'Monthly' },
            { type: 'Periodically' }];

            $scope.option = $scope.options[0];


            $scope.getTimeRangeData = function(){
                transactionsService.getTimeRangeData()
                .then(
                    function (success) {
                        $scope.transactions = success.data;
                    },
                    function (error) {
                        alert('Error getting the spend categories');
                    }); 
            }

    }]);
