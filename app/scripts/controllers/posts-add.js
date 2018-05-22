'use strict';

/**
 * @ngdoc function
 * @name sa20AdminFrontendApp.controller:PostsAddCtrl
 * @description
 * # PostsAddCtrl
 * Controller of the sa20AdminFrontendApp
 */
angular.module('sa20AdminFrontendApp')
.controller('PostsAddCtrl', function ($scope, $rootScope, categoriesService, postsService, $utilsViewService,
    $state) {
        
    $scope.post = {};
    $scope.tmpPath = $rootScope.pathLocation + 'tmp' + '/';
    $scope.tinymcePagesOptions = {
        toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table | fontsizeselect | fontselect ",
        fontsize_formats: "8pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 17pt 18pt 19pt 20pt 21pt 22pt 23pt 24pt 25pt 26pt 27pt 28pt",
        plugins: 'lists autolink textcolor colorpicker link media preview table code image',
        language_url : '/scripts/langs_tinymce/es.js',
        file_browser_callback_types: 'image',
        file_browser_callback: function(field_name, url, type, win) {
            $scope.input = field_name;
            $('#flImagen').click();
        }
    };
       
    $scope.init = function() {
        var date = new Date();
        $scope.fechaPublicacionPre = date;
        $scope.getCategorias();
    };
    
    $scope.getCategorias = function() {
        $scope.loadingCategories = "Cargando...";
        categoriesService.get({
            estado_id: 1
        }, function(data) {
            $scope.categories = data.categories;
            $scope.loadingCategories = "Seleccione uno";
        });
    };
    
    $scope.previewPortada = function(portada, errFiles) {
        $scope.loadingPortada = true;
        var fd = new FormData();
        fd.append('file', portada);
        
        postsService.previewPortada(fd, function(data) {
            $scope.portadaPreview = data.filename;
            $scope.loadingPortada = false;
        }, function(err) {
            $scope.portadaPreview = null;
            $scope.loadingPortada = false;
        });
    };
    
    $scope.savePost = function(post, boton, portadaPreview) {
        $('#' + boton).text('Guardando...');
        $utilsViewService.disable('#' + boton);
        
        if (portadaPreview !== null) {
            post.portada = portadaPreview;
        }
        if ($scope.fechaPublicacionPre !== null) {
            post.fechaPublicacion = $utilsViewService.formatDate($scope.fechaPublicacionPre);
        }
        post.estado_id = 1;
        
        postsService.save(post, function(data) {
            $utilsViewService.enable('#' + boton);
            $state.go('posts');
        }, function (err) {
            $scope.message = err;
            $utilsViewService.enable('#' + boton);
            $('#' + boton).text('Guardar');
        });
    };
    
    $scope.init();
});