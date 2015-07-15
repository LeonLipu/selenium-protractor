module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['Gruntfile.js', 'spec/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    protractor: {
    options: {
      keepAlive: true,
      configFile: "conf.js"
    },

    usertest: {
        options: {
          configFile: "e2econfig.js", // Target-specific config file
          args: {} // Target-specific arguments
        }
      },
      basicuser: {
        options: {
          configFile: "basicuserconf.js", // Target-specific config file
          args: {} // Target-specific arguments
        }
      },

    singlerun: {},
    auto: {
      keepAlive: true,
      options: {
        args: {
          seleniumPort: 4444
        }
      }
    }
  }





  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.registerTask('default', ['jshint','protractor:singlerun']);

};
