'use strict';

    describe('paymentController', function(){
      var scope, ctrl;
  
      beforeEach(module('paymentApp'));
  
      beforeEach(inject(function($controller) {
        scope = {};
        ctrl = $controller('paymentController', {$scope:scope});
      }));
  
      it('should create "payment types" model with credit/debit', function() {
        expect(scope.paymentType.length).toBe(2);
      });

    });
  