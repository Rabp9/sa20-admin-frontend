'use strict';

/**
 * @ngdoc function
 * @name sa20AdminFrontendApp.controller:InfosEditCtrl
 * @description
 * # InfosEditCtrl
 * Controller of the sa20AdminFrontendApp
 */
angular.module('sa20AdminFrontendApp')
.controller('InfosEditCtrl', function ($scope, info, $uibModalInstance, infosService, $utilsviewservice) {
    $scope.info = $.extend(true, {}, info);

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.saveInfo = function(info, boton) {
        $('#' + boton).text('Guardando...');
        $utilsviewservice.disable('#' + boton);
        
        infosService.save(info, function(data) {
            $utilsviewservice.enable('#' + boton);
            $uibModalInstance.close(data);
        }, function(error) {
            $utilsviewservice.enable('#' + boton);
            $uibModalInstance.close(error.data);
        });
    };
});