'use strict';

/**
 * @ngdoc function
 * @name sa20AdminFrontendApp.controller:PostsAddCtrl
 * @description
 * # PostsAddCtrl
 * Controller of the sa20AdminFrontendApp
 */
angular.module('sa20AdminFrontendApp')
.controller('PostsAddCtrl', function ($scope) {
    $scope.init = function() {
        var date = new Date();
        $scope.fechaPublicacionPre = date;
    };
    
    $scope.init();
});