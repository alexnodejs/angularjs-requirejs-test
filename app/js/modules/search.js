'use strict';

/**
 * Search module
 */

define(['angular', 'controllers/controllers', 'modules/mongolab'], function(angular, ctrls) {

    angular.module('search', ['mongolab']).config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', { templateUrl: 'templates/partials/user-list.html', controller: ctrls.Index })
            .when('/new', { templateUrl: 'templates/partials/edit.html', controller: ctrls.Create })
            .when('/edit/:id', { templateUrl: 'templates/partials/edit.html', controller: ctrls.Edit })
            .otherwise({ redirectTo: '/' });
    }]);

});
