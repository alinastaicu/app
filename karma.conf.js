module.exports = function(config) {

  var configSettings = {
    basePath: './src/static',
    frameworks: ['jasmine'],
    reporters: ['spec'],
    files: [
      'js/**/*.js',
      'js_tests/**/*.js'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    autoWatch: false,
    singleRun: true,
    browserNoActivityTimeout: 25000
  };

  config.set(configSettings);
};
