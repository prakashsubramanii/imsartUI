'use strict';

var transactions = angular.module('transactions', ['ui.bootstrap']);

transactions.controller('transactionsController', ['$http','$scope', '$window', '$rootScope', '$location', '$uibModal', 'config','transactionsService','paymentAppService',
    function ($http, $scope, $window, $rootScope, $location, $uibModal, config, transactionsService,paymentAppService) {

        $scope.categories = paymentAppService.getSpendCategoryOptions();
        $scope.category;

        $scope.startDate;
        $scope.endDate;

        if ( $scope.categories === undefined ){
                paymentAppService.getSpendCategories()
                .then(
                    function (success) {
                        $scope.categories = success.data;
                        paymentAppService.setSpendCategoryOptions($scope.categories);
                    },
                    function (error) {
                        console.log('Error getting the spend categories');
                    }); 
        }

        $scope.options = [
            { type: 'current' },
            { type: 'periodic' }];

            $scope.option = $scope.options[0];


            $scope.getTimeRangeData = function(option){
                console.log(option.type);
                transactionsService.getTimeRangeData(option.type)
                .then(
                    function (success) {
                        $scope.transactions = success.data;
                    },
                    function (error) {
                        console.log('Error getting the spend categories');
                    }); 
            }


            transactionsService.getTimeRangeData($scope.option.type,  $scope.startDate,  $scope.endDate)
            .then(
                function (success) {
                    $scope.transactions = success.data;
                    console.log(JSON.stringify($scope.transactions));
                },
                function (error) {
                    console.log('Error getting the spend categories');
                }); 

    }]);
