'use strict';

/**
 * @ngdoc service
 * @name sa20AdminFrontendApp.categoriesService
 * @description
 * # categoriesService
 * Factory in the sa20AdminFrontendApp.
 */
angular.module('sa20AdminFrontendApp')
.factory('categoriesService', function($resource, envService) {
    return $resource(envService.getHost() + "categories/:id.json", {}, {});
});