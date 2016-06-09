/**
 * Created by abautista on 09/06/2016.
 */
'use strict'

var app = angular.module("IniciaWebApp", [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'firebase'
])

    .constant('FBURL','https://project-6381816712702858280.firebaseio.com/')
    .config(function($routeProvider){
        $routeProvider
            .when('/',{
                templateURL: 'vistas/principal.html'
            })
            .when('/cocina',{
                templateURL: 'vistas/cocina.html'
            })
            .when('/entrepreneurship',{
                templateURL: 'vistas/entrepreneurship.html'
            })
            .when('/idiomas',{
                templateURL: 'vistas/idiomas.html'
            })
            .when('/programacion',{
                templateURL: 'vistas/programacion.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    
});