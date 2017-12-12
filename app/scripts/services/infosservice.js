'use strict';

/**
 * @ngdoc service
 * @name sa20AdminFrontendApp.infosService
 * @description
 * # infosService
 * Factory in the sa20AdminFrontendApp.
 */
angular.module('sa20AdminFrontendApp')
  .factory('infosService', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
