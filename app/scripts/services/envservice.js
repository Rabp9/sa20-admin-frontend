'use strict';

/**
 * @ngdoc service
 * @name sa20AdminFrontendApp.envService
 * @description
 * # envService
 * Factory in the sa20AdminFrontendApp.
 */
angular.module('sa20AdminFrontendApp')
.factory('envService', function () {
    return {
        getHost: function() {
            switch (window.location.hostname) {
                case 'localhost':
                    return 'http://localhost:8000/sa20-backend/';
                case 'admin.inexdeo.robertobocanegra.com':
                    return 'http://inexdeo.robertobocanegra.com/api/';
                case 'iedsa.com.pe':
                    return 'http://iedsa.com.pe/api/';
                case 'www.iedsa.com.pe':
                    return 'http://iedsa.com.pe/api/';
            }
        }
    };
});