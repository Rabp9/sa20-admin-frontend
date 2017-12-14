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
        saveMany: {
            method: 'POST',
            url: envService.getHost() + 'infos/saveMany.json',
        },
        getDataMany: {
            method: 'POST',
            url: envService.getHost() + 'infos/getDataMany.json',
        },
        getDataByData: {
            method: 'POST',
            url: envService.getHost() + 'infos/getDataByData.json',
        },
        upload: {
            method: 'POST',
            url: envService.getHost() + 'infos/upload/.json',
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }
    });
});