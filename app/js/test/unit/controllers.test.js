'use strict';

define(['controllers/controllers', 'test/unit/stub'], function(controllers, stub) {

    describe('Index controller', function() {

        var scope, ctrl, $httpBackend;

        beforeEach(function(){
            this.addMatchers({
                toEqualData: function(expected) {
                    return angular.equals(this.actual, expected);
                }
            });
        });

        beforeEach(module('search'));

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('https://api.mongolab.com/api/1/databases/users/' +
                'collections/users?apiKey=50bba905e4b041fc01c5a77a')
                .respond(stub);
            scope = $rootScope.$new();
            $controller(controllers.Index, {$scope: scope});
        }));

        it('User list', function() {
            expect(scope.users).toEqualData([]);
            $httpBackend.flush();
            expect(scope.users).toEqualData(stub);
        });
    });

});
