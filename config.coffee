exports.config =
  # See docs at https://github.com/brunch/brunch/blob/stable/docs/config.md.
  conventions:
    assets:  /^app\/assets\//
    ignored: /^(app\/styles\/overrides|(.*?\/)?[_]\w*)/
  sourceMaps: false
  optimize: false

  modules:
    definition: false
    wrapper: false
  paths:
    public: 'www'
  files:
    javascripts:
      joinTo:
        'js/app.js': /^app/
        'js/vendor.js': /^(bower_components|vendor)/
        'js/test.js': /^test/
        order:
          before: [
            'scripts/framework7.min.js',
            'scripts/utils/appUtils.js'
          ]
          after: [
            # 'app/scripts/my-app.js'
          ]

    stylesheets:
      joinTo:
        'css/app.css': /^(vendor|bower_components|app)/
      order:
        before: [
          'vendor/styles/reset.css',
          'styles/framework7.ios.min.css'
        ]
        after: [
          'styles/styles.scss'
        ]

  plugins:
    cleancss:
      keepSpecialComments: 0
      removeEmpty: true
    uncss:
        options:
            csspath: 'css/app.css'
            htmlroot: 'www'
        files: ['index.html']
    sass:
      mode: 'ruby' # set to 'native' to force libsass

  # Enable or disable minifying of result js / css files.
  minify: true
