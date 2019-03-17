'use strict';

var iSmartApp = angular.module('iSmartApp',['ngRoute','ui.bootstrap','angularUtils.directives.dirPagination','menuList','paymentApp','transactions']);

iSmartApp.controller('smartController', function insureController($scope){

    $scope.name='HCL Insurer';

});


iSmartApp.constant('config', {
    url:'http://10.117.189.206:9080/'

});
