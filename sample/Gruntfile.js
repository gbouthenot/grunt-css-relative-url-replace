module.exports = function(grunt) {
  grunt.loadTasks('../tasks');

  //grunt.loadNpmTasks('grunt-css-relative-url-replace');

  grunt.initConfig({
    css_relative_url_replace: {
      options: {
        staticRoot: 'public/'
      },
      replace: {
        files: {
          'public/dest/build.css': [
            'public/css/application.css',
            'public/css/users/default.css',
            'public/twitter-bootstrap/css/bootstrap.css'
          ]
        }
      }
    }
  });
};
