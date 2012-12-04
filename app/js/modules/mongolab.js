'use strict';

/**
 * Mongolab provider module
 */

define(['angular', 'angularResource'], function(angular) {

    angular.module('mongolab', ['ngResource']).factory('Project', function($resource) {
        var Project = $resource('https://api.mongolab.com/api/1/databases/users/collections/users/:id',
            { apiKey: '50bba905e4b041fc01c5a77a' },
            { update: { method: 'PUT' } }
        );

        Project.prototype.update = function(cb) {
            return Project.update({id: this._id.$oid},
                angular.extend({}, this, {_id:undefined}), cb);
        };

        Project.prototype.destroy = function(cb) {
            return Project.remove({id: this._id.$oid}, cb);
        };

        return Project;
    });

});
