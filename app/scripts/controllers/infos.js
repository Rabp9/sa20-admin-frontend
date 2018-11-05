'use strict';

/**
 * @ngdoc function
 * @name sa20AdminFrontendApp.controller:InfosCtrl
 * @description
 * # InfosCtrl
 * Controller of the sa20AdminFrontendApp
 */
angular.module('sa20AdminFrontendApp')
.controller('InfosCtrl', function ($scope, infosService, $uibModal, $utilsViewService) {
    var search = ['logo', 'logo_banner', 'title_banner', 'subtitle_banner', 'about_us',
    'footer', 'facebook_link', 'twitter_link', 'copyright'];
    
    $scope.getInfos = function() {
        $scope.loading = true;
        infosService.indexAdmin(search, function(data) {
            $scope.infos = data.infos;
            $scope.loading = false;
        }); 
    };
    
    $scope.init = function() {
        $scope.getInfos();
    };
    
    $scope.showInfosEdit = function(info, event) {
        $utilsViewService.disable(event.currentTarget);
        
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
        $utilsViewService.enable(event.currentTarget);
        
        modalInstanceEdit.result.then(function (data) {
            $scope.getInfos();
            $scope.message = data;
        });
    };
    
    $scope.init();
});