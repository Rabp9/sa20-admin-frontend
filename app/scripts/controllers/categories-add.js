'use strict';

/**
 * @ngdoc function
 * @name sa20AdminFrontendApp.controller:CategoriesAddCtrl
 * @description
 * # CategoriesAddCtrl
 * Controller of the sa20AdminFrontendApp
 */
angular.module('sa20AdminFrontendApp')
.controller('CategoriesAddCtrl', function ($scope, categoriesService, $rootScope, $uibModalInstance, $utilsViewService) {
    $scope.category = {};
    $scope.tmpPath = $rootScope.pathLocation + 'tmp';
    
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.saveCategory = function(category, boton, portadaPreview) {
        $('#' + boton).text('Guardando...');
        $utilsViewService.disable('#' + boton);
       
        if (portadaPreview !== null) {
            category.portada = portadaPreview;
        }
        category.estado_id = 1;
        categoriesService.save(category, function(data) {
            $utilsViewService.enable('#' + boton);
            $uibModalInstance.close(data);
        }, function(err) {
            $utilsViewService.enable('#' + boton);
            $uibModalInstance.close(err.data);
        });
    };
    
    $scope.previewPortada = function(portada, errFiles) {
        $scope.loading = true;
        var fd = new FormData();
        fd.append('file', portada);
        
        categoriesService.previewPortada(fd, function(data) {
            $scope.portadaPreview = data.filename;
            $scope.loading = false;
        }, function(data) {
            $scope.portadaPreview = null;
            $scope.loading = false;
        });
    };
});