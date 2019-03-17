'use strict';

var paymentApp = angular.module('paymentApp',[]);

paymentApp.controller('paymentController', ['$http','$scope', '$rootScope', 'config', 'paymentAppService', function($http, $scope, $rootScope, config, paymentAppService){

    $scope.payment = {}

    // $scope.spendCategory = ["Medical","Travel","Loans","Utility Bills","Education","Shopping"];

    $scope.paymentType = [{"id": 'Credit',"name": "Make Payment"},{"id": 'Debit',"name": "Receive Payment"}];

    // $scope.customers =  [{"id": 1,"name": "Customer1"},{"id": 1,"name": "Customer2"}];
    // $scope.payment.customer = $scope.customers[0];
    
    paymentAppService.getCustomers()
              .then(
                function (success) {
                    $scope.payment.customers = success.data;
                    $scope.payment.customer = $scope.payment.customers[0];
                },
                function (error) {
                    alert('Error getting the customers list');
                }); 


    paymentAppService.getSpendCategories()
    .then(
        function (success) {
            $scope.payment.spendCategories = success.data;
        },
        function (error) {
            alert('Error getting the spend categories');
        }); 

    $scope.transact = function(paymentObj){
        console.log( JSON.stringify(paymentObj));

        if ( (paymentObj.customer.balance < paymentObj.amount) && (paymentObj.paymentType.id == "Credit") )
        {
             alert('In sufficient balance. Transaction cannot be proceeded');
             return;
        }

        paymentAppService.payments(formJSONObject(paymentObj))
        .then(
            function (success) {
                console.log(JSON.stringify(success.data));
                alert(' Payment is successful ');
                window.location.replace('#!/transactions');
            },
            function (error) {
                alert('Error in receiving/making the payments');
            }); 
    }


    function formJSONObject(paymentObj){

        var obj = {  'description': paymentObj.description,
                     'spendCategory': paymentObj.category,
                     'amount': paymentObj.amount,
                     'date': paymentObj.date,
                     'paymentType':paymentObj.paymentType.id,
                     'customerId': paymentObj.customer.customerId
                }

        return obj;
    }

}]);