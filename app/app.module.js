'use strict';

var iSmartApp = angular.module('iSmartApp',['ngRoute','ui.bootstrap','angularUtils.directives.dirPagination','menuList','paymentApp','transactions']);

iSmartApp.controller('smartController', function insureController($scope){

    $scope.name='HCL Insurer';

});


iSmartApp.constant('config', {
    url:'http://13.233.90.170:9080/'

});
