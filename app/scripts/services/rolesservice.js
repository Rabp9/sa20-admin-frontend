'use strict';

/**
 * @ngdoc service
 * @name sa20AdminFrontendApp.rolesService
 * @description
 * # rolesService
 * Factory in the sa20AdminFrontendApp.
 */
angular.module('sa20AdminFrontendApp')
  .factory('rolesService', function () {
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
