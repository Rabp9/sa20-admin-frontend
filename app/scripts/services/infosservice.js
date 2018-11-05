'use strict';

/**
 * @ngdoc service
 * @name sa20AdminFrontendApp.infosService
 * @description
 * # infosService
 * Factory in the sa20AdminFrontendApp.
 */
angular.module('sa20AdminFrontendApp')
.factory('infosService', function($resource, envService) {
    return $resource(envService.getHost() + 'infos/:id.json', {}, {
        getMany: {
            method: 'POST',
            url: envService.getHost() + 'infos/getMany.json'
        },
        indexAdmin: {
            method: 'POST',
            url: envService.getHost() + 'infos/indexAdmin.json'
        },
        previewImagen: {
            method: 'POST',
            url: envService.getHost() + 'infos/previewImagen.json',
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }
    });
});