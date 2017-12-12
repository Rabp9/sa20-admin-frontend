'use strict';

/**
 * @ngdoc service
 * @name sa20AdminFrontendApp.usersService
 * @description
 * # usersService
 * Factory in the sa20AdminFrontendApp.
 */
angular.module('sa20AdminFrontendApp')
.factory('usersService', function ($resource, envService) {
    return $resource(envService.getHost() + 'users/:id.json', {}, {
        login: {
            method: 'POST',
            url: envService.getHost() + 'users/token/.json'
        },
        getAdmin: {
            method: 'GET',
            url: envService.getHost() + 'users/getAdmin/.json'
        }
    });
});