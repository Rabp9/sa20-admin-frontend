'use strict';

/**
 * @ngdoc service
 * @name sa20AdminFrontendApp.postsService
 * @description
 * # postsService
 * Factory in the sa20AdminFrontendApp.
 */
angular.module('sa20AdminFrontendApp')
.factory('postsService', function($resource, envService) {
    return $resource(envService.getHost() + "posts/:id.json", {}, {});
});