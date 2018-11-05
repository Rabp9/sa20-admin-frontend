'use strict';

/**
 * @ngdoc service
 * @name sa20AdminFrontendApp.categoriesService
 * @description
 * # categoriesService
 * Factory in the sa20AdminFrontendApp.
 */
angular.module('sa20AdminFrontendApp')
.factory('categoriesService', function ($resource, envService) {
    return $resource(envService.getHost() + 'categories/:id.json', {}, {
        getAdmin: {
            method: 'GET',
            url: envService.getHost() + 'categories/getAdmin/.json'
        },
        getTreeList: {
            method: 'GET',
            url: envService.getHost() + 'categories/getTreeList/:spacer.json'
        },
        previewPortada: {
            method: 'POST',
            url: envService.getHost() + 'categories/previewPortada/.json',
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }
    });
});