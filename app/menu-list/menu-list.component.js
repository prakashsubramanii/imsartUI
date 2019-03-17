'use strict';

angular.module('menuList')
       .component('menuList', {
                templateUrl:'menu-list/menu-list.template.html',
                controller: function menuListController($http){
                        var self = this;
                        //List of items in navigation menus
                        this.menus = [{ id: 1, place: 'View Transactions'},{ id: 2, place: 'Payments'},{ id: 3, place: 'Analytics'}];
                }


});