'use strict';

/**
 * @ngdoc function
 * @name sa20AdminFrontendApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the sa20AdminFrontendApp
 */
angular.module('sa20AdminFrontendApp')
.controller('PostsCtrl', function ($scope, postsService, $uibModal, 
    $utilsViewService, categoriesService) {
        
    $scope.search = {};
    $scope.search.text = '';
    
    $scope.getPosts = function() {
        $scope.loading = true;
        $scope.posts = [];
        postsService.get({
            estado_id: $scope.search.estado_id,
            text: $scope.search.text,
            category_id: $scope.search.category_id,
            page: $scope.page,
            items_per_page: $scope.items_per_page
        }, function(data) {
            $scope.posts = data.posts;
            $scope.pagination = data.pagination;
            $scope.loading = false;
        });
    };
    
    $scope.getCategories = function() {
        $scope.loading_categories = 'Cargando...';
        categoriesService.get({
            estado_id: 1
        }, function(data) {
            $scope.categories = data.categories;
            $scope.loading_categories = 'Seleccione un Categoría';
        });
    };
    
    $scope.init = function() {
        $scope.getCategories();
        $scope.getPosts();
        $scope.search.estado_id = '1';
        $scope.page = 1;
        $scope.items_per_page = 10;
    };
    
    $scope.showPostsDelete = function(post) {
        if (confirm('¿Está seguro de deshabilitar el post?')) {
            post.estado_id = 2;
            postsService.save(post, function(data) {
                $scope.message = data;
            }, function(error) {
                post.estado_id = 1;
            });
        }
    };
    
    $scope.showPostsActivate = function(post) {
        if (confirm('¿Está seguro de activar el post?')) {
            post.estado_id = 1;
            postsService.save(post, function(data) {
                $scope.message = data;
            }, function(error) {
                post.estado_id = 2;
            });
        }
    };
    
    $scope.$watch('search.estado_id', function(oldValue, newValue) {
        $scope.page = 1;
        $scope.getPosts();
    });
    
    $scope.$watch('search.category_id', function(oldValue, newValue) {
        $scope.page = 1;
        $scope.getPosts();
    });
    
    $scope.pageChanged = function() {
        $scope.getPosts();
    };
    
    $scope.onChangeItemsPerPage = function() {
        $scope.page = 1;
        $scope.getPosts();
    };
    
    $scope.search = function() {
        $scope.page = 1;
        $scope.getPosts();
    };
    
    $scope.init();
});