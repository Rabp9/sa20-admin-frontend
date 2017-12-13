'use strict';

/**
 * @ngdoc function
 * @name sa20AdminFrontendApp.controller:InfosCtrl
 * @description
 * # InfosCtrl
 * Controller of the sa20AdminFrontendApp
 */
angular.module('sa20AdminFrontendApp')
.controller('InfosCtrl', function ($scope, infosService, $uibModal, $utilsviewservice) {
    var search = ['quienes_somos_mensaje', 'historia_mensaje', 'directorio_mensaje',
    'ubicacion_mensaje', 'telefono', 'email', 'facebook_link', 'transnv_resumen', 
    'ubicacion_codigo', 'enlace_1_titulo', 'enlace_2_titulo', 'enlace_3_titulo',
    'enlace_1_link', 'enlace_2_link', 'enlace_3_link', 'twitter_link', 'direccion', 'copyright', 'ubicacion_code'];
    
    $scope.getInfos = function() {
        $scope.loading = true;
        infosService.getDataByData(search, function(data) {
            $scope.infos = data.infos;
            $scope.loading = false;
        }); 
    };
    
    $scope.init = function() {
        $scope.getInfos();
    };
    
    $scope.showInfosEdit = function(info, event) {
        $utilsviewservice.disable(event.currentTarget);
        
        var modalInstanceEdit = $uibModal.open({
            templateUrl: 'views/infos-edit.html',
            controller: 'InfosEditCtrl',
            backdrop: false,
            resolve: {
                info: function() {
                    return info;
                }
            }
        });
        $utilsviewservice.enable(event.currentTarget);
        
        modalInstanceEdit.result.then(function (data) {
            $scope.getInfos();
            $scope.message = data;
        });
    };
    
    $scope.init();
});