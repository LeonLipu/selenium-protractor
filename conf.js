exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/*.js'],
  directConnect: true,
  jasmineNodeOpts: {
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 10000
  }
};
