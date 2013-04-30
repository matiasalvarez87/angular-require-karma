// Karma configuration
// Generated on Mon Apr 29 2013 16:34:32 GMT-0300 (ART)


// base path, that will be used to resolve files and exclude
basePath = './';


// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  REQUIRE,
  REQUIRE_ADAPTER,

  {pattern: 'js/lib/jQuery/jquery-1.9.1.min.js', included: false},
  {pattern: 'js/lib/angular/angular.js', included: false},
  {pattern: 'js/lib/angular/angular-resource.js', included: false},
  {pattern: 'js/lib/angular/angular-mocks.js', included: false},

  {pattern: 'js/controllers/*.js', included: false},
  {pattern: 'js/routes.js', included: false},
  {pattern: 'js/app.js', included: false},

  {pattern: 'test/**/*Spec.js', included: false},
  
  'test/main-test.js'
];


// list of files to exclude
exclude = [
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_DEBUG;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
