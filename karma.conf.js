module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
                'bower_components/angular/angular.js',
                'bower_components/angular-mocks/angular-mocks.js',
                'bower_components/**/*.js',
                'test/**/*Test.js',
                'app/main/**/*.js'
//              'bower_components/video-js/**/*.js'
        ],

        // list of files to exclude
        exclude: [
              'bower_components/**/*.js'
//            'bower_components/angular/index.js',
//            'bower_components/angular-mocks/ngAnimateMock.js',
//            'bower_components/angular-mocks/ngMock.js',
//            'bower_components/angular-mocks/ngMockE2E.js',
//            'bower_components/angular-resource/index.js',
//            'bower_components/angular-sanitize/index.js',
//            'bower_components/angular-touch/index.js',
//            'bower_components/Chart.js/gulpfile.js',
//            'bower_components/tc-angular-chartjs/index.js'
//            'bower_components/video-js/dist/video-js/lang/*.js',
//            'bower_components/video-js/src/**/*.js',
//            'bower_components/video-js/dist/video-js/video.novtt.dev.js',
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'app/**/*.js': ['coverage']
        },

        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage', 'threshold'],

        coverageReporter: {
            type : 'html',
            dir : 'build/reports/coverage'
        },

        thresholdReporter: {
            statements: 90,
            branches: 60,
            functions: 85,
            lines: 90
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN
        // || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_WARN,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true

    });

};
