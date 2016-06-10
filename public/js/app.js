/**
 * Created by abautista on 09/06/2016. */

(function(){
    'use strict'

    angular
        .module('appCursos',[])
        .controller('cursosController',cursosController);

    function cursosController(){
        var curso = this;
        curso.collection = [
            {
                'img': 'http://ia.media-imdb.com/images/M/MV5BMTkxNDYxOTA4M15BMl5BanBnXkFtZTgwNTk0NzQxMTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
                'name': 'Matrix',
                'cast' : ['NEO','TRINITY','MORFEO'],
                'year' :  1999,
                'category': 'Sci-Fi'
            },
            {
                'img': 'http://ia.media-imdb.com/images/M/MV5BMTkyNzY5MDA5MV5BMl5BanBnXkFtZTcwMjg4MzI3MQ@@._V1_UY268_CR4,0,182,268_AL_.jpg',
                'name': 'American Gangster',
                'cast' : ['NEO','TRINITY','MORFEO'],
                'year' :  1990,
                'category': 'Sci-Fi'
            },
            {
                'img': 'http://ia.media-imdb.com/images/M/MV5BMTYwOTEzMDMzMl5BMl5BanBnXkFtZTgwNzExODIzNzE@._V1_UX182_CR0,0,182,268_AL_.jpg',
                'name': 'Game of Thrones',
                'cast' : ['NEO','TRINITY','MORFEO'],
                'year' :  2014,
                'category': 'Sci-Fi'
            },
            {
                'img': 'http://ia.media-imdb.com/images/M/MV5BMTI2MTgyNjExM15BMl5BanBnXkFtZTcwNzU4MjkyMg@@._V1_UX182_CR0,0,182,268_AL_.jpg',
                'name': 'Wolverine',
                'cast' : ['NEO','TRINITY','MORFEO'],
                'year' :  2000,
                'category': 'Sci-Fi'
            },
            {
                'img': 'http://ia.media-imdb.com/images/M/MV5BNDA5NDAzMzg1MF5BMl5BanBnXkFtZTgwOTY2MjU2NzE@._V1_UY268_CR2,0,182,268_AL_.jpg',
                'name': 'Batman',
                'cast' : ['NEO','TRINITY','MORFEO'],
                'year' :  2015,
                'category': 'Sci-Fi'
            },
            {
                'img': 'http://ia.media-imdb.com/images/M/MV5BMjU4NDExNDM1NF5BMl5BanBnXkFtZTgwMDIyMTgxNzE@._V1_UX182_CR0,0,182,268_AL_.jpg',
                'name': 'The revenant',
                'cast' : ['NEO','TRINITY','MORFEO'],
                'year' :  2016,
                'category': 'Sci-Fi'
            }
        ];



        curso.lista = [
            {
                "Nombre": "Berlin Live",
                "Idioma": "alemán",
                "Lugar": "Berlín, Alemania",
                "Institucion": "Institut für Internationale Kommunikation e.V.",
                "Fechas": "2 al 27 de agosto de 2016",
                "Costo": "495 euros",
                "horas": "25 horas/semana",
                "img":"https://s3-media1.fl.yelpcdn.com/bphoto/BUvJ-nctZqDz3FrE7hY40w/ls.jpg"
            },
            {
                "Nombre": "Cursos de Lengua y Civilización Francesa",
                "Idioma": "francés",
                "Lugar": "París, Francia",
                "Institucion": "Université Paris-Sorbonne",
                "Fechas": "1 al 28 de septiembre de 2016",
                "Costo": "770 euros",
                "horas": "12 horas/semana",
                "img":"https://s3-media1.fl.yelpcdn.com/bphoto/BUvJ-nctZqDz3FrE7hY40w/ls.jpg"
            },
            {
                "Nombre": "Cursos de Lengua y Civilización Francesa",
                "Idioma": "francés",
                "Lugar": "Faro, Portugal",
                "Institucion": "Universidade do Algarve",
                "Fechas": "4 al 22 de julio de 2016",
                "Costo": "350 euros",
                "horas": "57 horas totales más 20 de módulos culturales",
                "img":"https://s3-media1.fl.yelpcdn.com/bphoto/BUvJ-nctZqDz3FrE7hY40w/ls.jpg"
            },
            {
                "Nombre": "Cursos de Lengua y Civilización Francesa",
                "Idioma": "francés",
                "Lugar": "Faro, Portugal",
                "Institucion": "Universidade do Algarve",
                "Fechas": "4 al 22 de julio de 2016",
                "Costo": "350 euros",
                "horas": "57 horas totales más 20 de módulos culturales",
                "img":"https://s3-media1.fl.yelpcdn.com/bphoto/BUvJ-nctZqDz3FrE7hY40w/ls.jpg"
            },
            {
                "Nombre": "SDI Deutsch als Fremdsprache",
                "Idioma": "alemán",
                "Lugar": "Munich, Alemania",
                "Institucion": "Hochschule für Angewandte Sprachen",
                "Fechas": "1 al 26 de julio de 2016",
                "Costo": "480 euros",
                "horas": "25 horas/semana",
                "img":"https://s3-media1.fl.yelpcdn.com/bphoto/BUvJ-nctZqDz3FrE7hY40w/ls.jpg"
            }
        ];
    }

})();

