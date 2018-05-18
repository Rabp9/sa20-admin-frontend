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
    $utilsviewservice) {
        
    $scope.loading = true;
    $scope.search = {};
    $scope.search.estado_id = '1';
    
    $scope.getPosts = function() {
        postsService.getAdmin(function(data) {
            $scope.posts = data.posts;
            $scope.loading = false;
        });
    };
    
    $scope.init = function() {
        $scope.getPosts();
    };
    
    $scope.showPostsAdd = function(event) {
        $utilsviewservice.disable(event.currentTarget);
        
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/posts-add.html',
            controller: 'PostsAddCtrl',
            backdrop: false,
            size: 'lg'
        });
        
        $utilsviewservice.enable(event.currentTarget);
        
        modalInstanceAdd.result.then(function(data) {
            $scope.getPosts();
            $scope.message = data;
        });
    };
    
    $scope.showPostsEdit = function(post, event) {
        $utilsviewservice.disable(event.currentTarget);
        
        var modalInstanceEdit = $uibModal.open({
            templateUrl: 'views/posts-edit.html',
            controller: 'PostsEditCtrl',
            backdrop: false,
            size: 'lg',
            resolve: {
                post: function() {
                    return post;
                }
            }
        });
        
        $utilsviewservice.enable(event.currentTarget);
        
        modalInstanceEdit.result.then(function(data) {
            $scope.getPosts();
            $scope.message = data;
        });
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
    
    $scope.init();
});