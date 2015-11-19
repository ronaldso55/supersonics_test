/*

Default Gruntfile for AppGyver Steroids
http://www.appgyver.com
Licensed under the MIT license.

*/

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['*.js', 'scripts/**/*.js', 'app/**/*.js'],
            options: {
                jshintrc: true,
                ignores: ['app/**/*spec.js']
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        jscs: {
            src: ['*.js', 'scripts/**/*.js', 'app/**/*.js'],
            options: {
                config: '.jscsrc'
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-steroids');
    // jshint, jscs and karma to default task before steroids-make-fresh
    grunt.registerTask('default', ['jshint', 'jscs', 'karma', 'steroids-make-fresh']);
};
