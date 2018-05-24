'use strict';

/**
 * @ngdoc function
 * @name sa20AdminFrontendApp.controller:CategoriesCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the sa20AdminFrontendApp
 */
angular.module('sa20AdminFrontendApp')
.controller('CategoriesCtrl', function ($scope, categoriesService, $uibModal, 
    $utilsViewService) {
        
    $scope.loading = true;
    $scope.search = {};
    $scope.search.estado_id = '1';
    
    $scope.getCategories = function() {
        $scope.loading = true;
        categoriesService.get({
            estado_id: $scope.search.estado_id,
            text: $scope.search.text,
            page: $scope.page,
            items_per_page: $scope.items_per_page
        }, function(data) {
            $scope.categories = data.categories;
            $scope.pagination = data.pagination;
            $scope.loading = false;
        });
    };
    
    $scope.init = function() {
        $scope.getCategories();
    };
    
    $scope.showCategoriesAdd = function(event) {
        $utilsViewService.disable(event.currentTarget);
        
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/categories-add.html',
            controller: 'CategoriesAddCtrl',
            backdrop: false,
            size: 'lg'
        });
        
        $utilsViewService.enable(event.currentTarget);
        
        modalInstanceAdd.result.then(function(data) {
            $scope.getCategories();
            $scope.message = data;
        });
    };
    
    $scope.showCategoriesEdit = function(category, event) {
        $utilsViewService.disable(event.currentTarget);
        
        var modalInstanceEdit = $uibModal.open({
            templateUrl: 'views/categories-edit.html',
            controller: 'CategoriesEditCtrl',
            backdrop: false,
            size: 'lg',
            resolve: {
                category: function() {
                    return category;
                }
            }
        });
        
        $utilsViewService.enable(event.currentTarget);
        
        modalInstanceEdit.result.then(function(data) {
            $scope.getCategories();
            $scope.message = data;
        });
    };
    
    $scope.showCategoriesDelete = function(category) {
        if (confirm('¿Está seguro de deshabilitar la categoría?')) {
            category.estado_id = 2;
            categoriesService.save(category, function(data) {
                $scope.message = data;
            }, function(error) {
                category.estado_id = 1;
            });
        }
    };
    
    $scope.showCategoriesActivate = function(category) {
        if (confirm('¿Está seguro de activar la categoría?')) {
            category.estado_id = 1;
            categoriesService.save(category, function(data) {
                $scope.message = data;
            }, function(error) {
                category.estado_id = 2;
            });
        }
    };
    
    $scope.init();
});