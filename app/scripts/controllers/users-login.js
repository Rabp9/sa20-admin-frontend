'use strict';

/**
 * @ngdoc function
 * @name sa20AdminFrontendApp.controller:UsersLoginCtrl
 * @description
 * # UsersLoginCtrl
 * Controller of the sa20AdminFrontendApp
 */
angular.module('sa20AdminFrontendApp')
.controller('UsersLoginCtrl', function ($scope, usersService, $cookies, $location, 
    $rootScope, $utilsViewService) {
    
    $scope.loginUser = function(user, boton) {
        $('#' + boton).text('Login...');
        $utilsViewService.disable('#' + boton);
        
        usersService.login(user, function(data) {
            if (!data.user) {
                $scope.message = data.message;
            } else {
                $cookies.putObject('sa20-user', data.user);
                $cookies.put('sa20-token', data.token);
                $rootScope.user = data.user;
                $('#wrapper').removeClass('inLogin');
                $location.path('/');
            }
        }, function(error) {
            $scope.message = error.data;
        });
    };
});