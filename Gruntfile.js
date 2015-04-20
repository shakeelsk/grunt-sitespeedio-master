/**
 * grunt-sitespeed.io (http://www.sitespeed.io)
 * Copyright (c) 2015, Peter Hedenskog, Tobias Lidskog
 * and other contributors
 * Released under the Apache 2.0 License
 */
'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },
    nodeunit: {
      all: ['test/test*.js']
    },

    // Configuration to be run (and then tested).
    sitespeedio: {
      default_options: {
        options: {
            url: 'http://www.jstor.org',
            deepth: 1,
            resultBaseDir: '/Users/sshaik/source/',noYslow: true,
            gpsiKey: 'AIzaSyDFnxH1W3fMxNaW-gFe2i9sDntc0sz9q8I',
            profile: 'desktop',
            budget: {
              gpsi: {
                score: 75
              }
            }
        }
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-sitespeedio');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'sitespeedio']);
  grunt.registerTask('test_acceptance', ['nodeunit:all']);
  grunt.registerTask('default', 'test');
  grunt.config.set('includePassed', true);
};
