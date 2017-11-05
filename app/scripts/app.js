'use strict';

/**
 * @ngdoc overview
 * @name sa20AdminFrontendApp
 * @description
 * # sa20AdminFrontendApp
 *
 * Main module of the application.
 */
angular
.module('sa20AdminFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ngFileUpload',
    'ui.tinymce',
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.interceptors.push('oAuthHttpInterceptor');
    var mainState = {
        name: 'main',
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        title: 'Home'
    };  
    
    var infosState = {
        name: 'infos',
        url: '/infos',
        templateUrl: 'views/infos.html',
        controller: 'InfosCtrl',
        controllerAs: 'infos',
        title: 'Información General'
    };
    /*
    var nosotrosState = {
        name: 'nosotros',
        url: '/nosotros',
        templateUrl: 'views/nosotros.html',
        controller: 'NosotrosCtrl',
        controllerAs: 'nosotros',
        title: 'Nosotros'
    };
    
    var slidesState = {
        name: 'slides',
        url: '/slides',
        templateUrl: 'views/slides.html',
        controller: 'SlidesCtrl',
        controllerAs: 'slides',
        title: 'Slides'
    };
    
    var clientesState = {
        name: 'clientes',
        url: '/clientes',
        templateUrl: 'views/clientes.html',
        controller: 'ClientesCtrl',
        controllerAs: 'clientes',
        title: 'Clientes'
    };
    
    var serviciosState = {
        name: 'servicios',
        url: '/servicios',
        templateUrl: 'views/servicios.html',
        controller: 'ServiciosCtrl',
        controllerAs: 'servicios',
        title: 'Servicios'
    };
    
    var noticiasState = {
        name: 'noticias',
        url: '/noticias',
        templateUrl: 'views/noticias.html',
        controller: 'NoticiasCtrl',
        controllerAs: 'noticias',
        title: 'Noticias'
    };
    
    var rolesState = {
        name: 'roles',
        url: '/roles',
        templateUrl: 'views/roles.html',
        controller: 'RolesCtrl',
        controllerAs: 'roles',
        title: 'Roles'
    };
    
    var usersState = {
        name: 'users',
        url: '/users',
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'users',
        title: 'Usuarios'
    };
    
    var directorioState = {
        name: 'directorio',
        url: '/directorio',
        templateUrl: 'views/directorio.html',
        controller: 'DirectorioCtrl',
        controllerAs: 'directorio',
        title: 'Directorio'
    };
    
    var cabecerasState = {
        name: 'cabeceras',
        url: '/cabeceras',
        templateUrl: 'views/cabeceras.html',
        controller: 'CabecerasCtrl',
        controllerAs: 'cabeceras',
        title: 'Cabeceras'
    };
    
    var usersLoginState = {
        name: 'users-login',
        url: '/users-login',
        templateUrl: 'views/users-login.html',
        controller: 'UsersLoginCtrl',
        controllerAs: 'users-login',
        title: 'Login'
    };
    */
    $stateProvider.state(mainState);
    $stateProvider.state(infosState);/*
    $stateProvider.state(nosotrosState);
    $stateProvider.state(slidesState);
    $stateProvider.state(clientesState);
    $stateProvider.state(serviciosState);
    $stateProvider.state(noticiasState);
    $stateProvider.state(directorioState);
    $stateProvider.state(cabecerasState);
    $stateProvider.state(rolesState);
    $stateProvider.state(usersState);
    $stateProvider.state(usersLoginState);*/
    $urlRouterProvider.when('', '/');
});
