## sk8loc8 -> angularize

modernisation of sk8loc8 to SPA using angular.

based on angular seed.


### dev env settings (osx)

* `python -m SimpleHTTPServer`
* or for node `scripts/web-server.js`
* karma test runner `test.sh`

tests are written for jasmine

### Directory Layout

    app/                --> all of the files to be used in production
      bower_components  --> any libraries obtained via bower (angular, bootstrap, etc)
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      index.html        --> app layout file 
      js/               --> javascript files
        app.js          --> application init and routing
        controllers.js  --> application controllers
        directives.js   --> application directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
      partials/         --> angular view partials
        

    config/karma.conf.js        --> config file for running unit tests with Karma
    config/karma-e2e.conf.js    --> config file for running e2e tests with Karma

    scripts/            --> handy shell/js/ruby scripts
      e2e-test.sh       --> runs end-to-end tests with Karma (*nix)
      e2e-test.bat      --> runs end-to-end tests with Karma (windows)
      test.bat          --> autotests unit tests with Karma (windows)
      test.sh           --> autotests unit tests with Karma (*nix)
      web-server.js     --> simple development webserver based on node.js

    test/               --> test source files and libraries
      e2e/              -->
        runner.html     --> end-to-end test runner (open in your browser to run)
        scenarios.js    --> end-to-end specs
      lib/
        angular/                --> angular testing libraries
          angular-mocks.js      --> mocks that replace certain angular services in tests
          angular-scenario.js   --> angular's scenario (end-to-end) test runner library
          version.txt           --> version file
      unit/                     --> unit level specs/tests
        controllersSpec.js      --> specs for controllers
        directivessSpec.js      --> specs for directives
        filtersSpec.js          --> specs for filters
        servicesSpec.js         --> specs for services
