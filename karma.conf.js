module.exports = function(config) {
    config.set({

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        coverageReporter: {
            type : 'html',
            dir : 'build/reports/coverage'
        },

        // list of files to exclude
        exclude: [],

        // list of files / patterns to load in the browser.
        // Note [RS] Angular.js MUST go first here.  The sequence for this files is important!!!
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-cookies/angular-cookies.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'bower_components/angular-translate/angular-translate.js',
            'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
            'bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
            'bower_components/angular-translate-storage-local/angular-translate-storage-local.js',
            'bower_components/steroids-js/steroids.js',
            'bower_components/supersonic/supersonic.js',
            'bower_components/webcomponentsjs/webcomponents.js',
            'app/main/**/*.js',
            'test/**/*spec.js'
        ],

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN
        // || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_WARN,

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'app/**/*.js': ['coverage']
        },

        // web server port
        port: 9876,

        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage', 'threshold'],

        thresholdReporter: {
            statements: 90,
            branches: 60,
            functions: 85,
            lines: 90
        },

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });

};
