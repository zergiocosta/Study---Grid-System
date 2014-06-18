// -------------------------------------------------------
// Gruntfile.js for Grid System Studies
// Version: 1.0.0
//
// Author:  Sergio Costa
// URL:     http://www.sergiocosta.net.br
// Contact: sergio.costa@outlook.com
// -------------------------------------------------------
"use strict";

module.exports = function(grunt) {

    // Para instalar matchdep na pasta src do projeto: $ npm install matchdep
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    var projectConfig = {

        // Setting Directories
        dirs: {
            app:  "../",
            sass: "../sass",
            css:  "../css",
        },

        // Metadata
        pkg: grunt.file.readJSON("package.json"),

        // Watch 
        // Para instalar na pasta src do projeto: $ npm install grunt-contrib-watch --save-dev
        watch: {
            options: {
                livereload: true
            },
            compass: {
                files: [
                    "<%= dirs.css %>/{,*/}*.css",
                    "<%= dirs.sass %>/{,*/}*.{scss,sass}"
                ],
                tasks: ["compass", "notify:compass"]
            },
            html: {
                files: [
                    // supported files: html, htm, shtml, shtm, xhtml, php, jsp, asp, aspx, erb, ctp
                    "<%= dirs.app %>/*.{html,htm,shtml,shtm,xhtml,php,jsp,asp,aspx,erb,ctp}"
                ]
            }
        },

        // Compass
        // Para instalar na pasta src do projeto: $ npm install grunt-contrib-compass --save-dev
        compass: {
            dist: {
                options: {
                    sassDir: '../sass',
                    cssDir: '../css',
                    environment: "development",
                    outputStyle: "compact",
                    force: true,
                    config: "config.rb"
                }
            }
        },

        // Notify
        // Para instalar na pasta src do projeto: $ npm install grunt-notify --save-dev
        notify: {
          compass: {
            options: {
              title: "SASS - <%= pkg.title %>",
              message: "Compilado e minificado com sucesso!"
            }
          }
        },

    };

    // Init Grunt
        grunt.initConfig(projectConfig);


    // Register Tasks
    // ----------------

    // Watch Project - $ grunt
    grunt.registerTask( "default", [ "watch" ]);


};