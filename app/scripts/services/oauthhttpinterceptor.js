'use strict';

/**
 * @ngdoc service
 * @name sa20AdminFrontendApp.oAuthHttpInterceptor
 * @description
 * # oAuthHttpInterceptor
 * Factory in the sa20AdminFrontendApp.
 */
angular.module('sa20AdminFrontendApp')
.factory('oAuthHttpInterceptor', function ($cookies) {
    return {
        request: function (config) {
            config.headers.Authorization = 'Bearer ' + $cookies.get('sa20-token');
            return config;
        }
    };
});