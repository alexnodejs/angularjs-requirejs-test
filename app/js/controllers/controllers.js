'use strict';

/**
 * Controllers
 */

define(['angular'], function(angular) {

    return {
        Index: function($scope, Project) {
            $scope.users = Project.query();
        },

        Create: function($scope, $location, Project) {
            $scope.legend = 'New User';
            $scope.save = function() {
                Project.save($scope.user, function(user) {
                    $location.path('/' + user._id.$oid);
                });
            }
        },

        Edit: function($scope, $location, $routeParams, Project) {
            var self = this;

            $scope.legend = 'Edit User';
            Project.get({id: $routeParams.id}, function(user) {
                self.original = user;
                $scope.user = new Project(self.original);
            });

            $scope.isClean = function() {
                return angular.equals(self.original, $scope.user);
            }

            $scope.destroy = function() {
                self.original.destroy(function() {
                    $location.path('/');
                });
            };

            $scope.save = function() {
                $scope.user.update(function() {
                    $location.path('/');
                });
            };
        }
    }

});
