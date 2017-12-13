'use strict';

/**
 * @ngdoc service
 * @name sa20AdminFrontendApp.infosService
 * @description
 * # infosService
 * Factory in the sa20AdminFrontendApp.
 */
angular.module('sa20AdminFrontendApp')
.factory('infosService', function($resource, envservice) {
    return $resource(envservice.getHost() + 'infos/:id.json', {}, {
        saveMany: {
            method: 'POST',
            url: envservice.getHost() + 'infos/saveMany.json',
        },
        getDataMany: {
            method: 'POST',
            url: envservice.getHost() + 'infos/getDataMany.json',
        },
        getDataByData: {
            method: 'POST',
            url: envservice.getHost() + 'infos/getDataByData.json',
        },
        upload: {
            method: 'POST',
            url: envservice.getHost() + 'infos/upload/.json',
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }
    });
});