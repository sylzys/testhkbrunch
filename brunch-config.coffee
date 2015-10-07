exports.config =
  paths:
    public: 'www'
  files:
    javascripts:
      joinTo:
        'js/app.js': /^app/
        'js/vendor.js': /^(bower_components|vendor)/
    stylesheets:
      joinTo: 'css/app.css'
      order:
        before: [
          'vendor/styles/reset.css'
        ]
  plugins:
    cleancss:
      keepSpecialComments: 0
      removeEmpty: true
    # sass:
    #   mode: 'ruby' # set to 'native' to force libsass


