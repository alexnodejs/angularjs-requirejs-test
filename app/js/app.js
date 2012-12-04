'use strict';

/**
 * Application
 */

define([

    'angular',
    'modules/search',
    'modules/mongolab'

], function(angular) {

    angular.bootstrap(document, ['search']);

});
