'use strict';

var paymentApp = angular.module('paymentApp',[]);

paymentApp.controller('paymentController', function($scope){

    $scope.payment = {}

    $scope.spendCategory = ["Medical","Travel","Loans","Utility Bills","Education","Shopping"];

    $scope.paymentType = [{"id": 1,"name": "Credit"},{"id": 1,"name": "Debit"}];

    $scope.customers =  [{"id": 1,"name": "Customer1"},{"id": 1,"name": "Customer2"}];
    $scope.payment.customer = $scope.customers[0];
    
    // $scope.getdetails = function () {
    //     alert(spendselected);
    //     if ($scope.userselected == "2")
    //     $scope.result = true;
    //     else
    //     $scope.result = false;
    //     }        

    $scope.transact = function(paymentObj){
        // var date = formatDate(paymentObj.date)
        console.log( JSON.stringify(paymentObj));
        // console.log(date);
    }
    // function formatDate(date) {
    //     var hours = date.getHours();
    //     var minutes = date.getMinutes();
    //     var ampm = hours >= 12 ? 'pm' : 'am';
    //     hours = hours % 12;
    //     hours = hours ? hours : 12; // the hour '0' should be '12'
    //     minutes = minutes < 10 ? '0'+minutes : minutes;
    //     var strTime = hours + ':' + minutes + ' ' + ampm;
    //     return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
    //   }
      
    //   var d = new Date();
    //   var e = formatDate(d);
          
});