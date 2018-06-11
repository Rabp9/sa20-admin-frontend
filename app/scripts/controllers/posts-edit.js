'use strict';

/**
 * @ngdoc function
 * @name sa20AdminFrontendApp.controller:PostsEditCtrl
 * @description
 * # PostsEditCtrl
 * Controller of the sa20AdminFrontendApp
 */
angular.module('sa20AdminFrontendApp')
  .controller('PostsEditCtrl', function ($scope, $rootScope, categoriesService, postsService, $utilsViewService,
    $state, $q) {
        
    var preview = true;
    var changed = false;
    var tmpPath = $rootScope.pathLocation + 'tmp' + '/';
    $scope.tmpPath = $rootScope.pathLocation + 'img' + '/posts';
    $scope.tinymcePagesOptions = {
        toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table | fontsizeselect | fontselect ",
        fontsize_formats: "8pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 17pt 18pt 19pt 20pt 21pt 22pt 23pt 24pt 25pt 26pt 27pt 28pt",
        plugins: 'lists autolink textcolor colorpicker link media preview table code image',
        language_url : '/scripts/langs_tinymce/es.js',
        file_browser_callback_types: 'image',
        file_picker_callback: function(callback, value, meta) {
            if (meta.filetype == 'image') {
                $('#flImageContenido').click();
                $('#flImageContenido').change(function() {
                    var file = this.files[0];
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        callback(e.target.result, {
                            alt: ''
                        });
                    };
                    reader.readAsDataURL(file);
                });
            }
        }
    };
       
    $scope.init = function() {
        var date = new Date();
        $scope.fechaPublicacionPre = date;
        $scope.getCategorias().then($scope.getPost($state.params.id));
    };
    
    $scope.getPost = function(id) {
        $scope.loading = true;
        postsService.get({id: id}, function(data) {
            $scope.post = data.post;
            $scope.portadaPreview = $scope.post.portada;
            $scope.loading = false;
        });
    };
    
    $scope.getCategorias = function() {
        return $q(function(resolve, reject) {
            $scope.loadingCategories = "Cargando...";
            categoriesService.get({
                estado_id: 1
            }, function(data) {
                $scope.categories = data.categories;
                $scope.loadingCategories = "Seleccione uno";
            });
        });
    };
    
    $scope.previewPortada = function(portada, errFiles) {
        if (preview && portada !== null) {
            $scope.loadingPortada = true;
            var fd = new FormData();
            fd.append('file', portada);

            postsService.previewPortada(fd, function(data) {
                $scope.portadaPreview = data.filename;
                $scope.loadingPortada = false;
                $scope.tmpPath = tmpPath;
                changed = true;
            }, function(err) {
                $scope.portadaPreview = null;
                $scope.loadingPortada = false;
            });
            preview = false;
        } else {
            preview = true;
        }
    };
    
    $scope.savePost = function(post, boton, portadaPreview) {
        $('#' + boton).text('Guardando...');
        $utilsViewService.disable('#' + boton);
        var date = new Date();
        
        if (portadaPreview !== null) {
            post.portada = portadaPreview;
        }
        
        if ($scope.fechaPublicacionPre !== null) {
            post.fechaPublicacion = $utilsViewService.formatDateTime($scope.fechaPublicacionPre);
        }
        
        post.changed = changed;
        post.estado_id = 1;
        post.user_id = $rootScope.user.id;
        post.fechaModificacion = $utilsViewService.formatDateTime(date);
        
        postsService.save(post, function(data) {
            $utilsViewService.enable('#' + boton);
            $rootScope.message = data;
            $state.go('posts');
        }, function(err) {
            $utilsViewService.enable('#' + boton);
            $rootScope.message = err;
            $state.go('posts');
        });
    };
    
    $scope.init();
});