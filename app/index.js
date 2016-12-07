'use strict';

var generators = require('yeoman-generator'),
    _ = require('lodash'),
    chalk = require('chalk'),
    yosay = require('yosay');

module.exports = generators.Base.extend({

    constructor: function () {
        generators.Base.apply(this, arguments);
    },

    initializing: function () {
    },

    prompting: function () {
        this.log(yosay('Welcome to ' + chalk.yellow('YANG (Yet Another Angular)') + ' generator!'));
    },

    configuring: function () {
    },

    writing: {

        logRoutes: function () {
            var source = this.templatePath('_favicon.ico');
            var dest = this.destinationPath('src/favicon.ico');
            this.log('---------------------------------------');
            this.log('Template path:', this.templatePath());
            this.log('Destination path:', this.destinationPath());
            this.log('Source:', source);
            this.log('Dest:', dest);
            this.log('---------------------------------------');
        },

        gulpfile: function(){
            this.copy('_gulpfile.js', 'gulpfile.js');
            this.copy('_gulp.config.js', 'gulp.config.js');
            this.copy('jshintrc', '.jshintrc');
        },

        packageJSON: function(){
            this.copy('_package.json', 'package.json');
        },

        git: function(){
            this.copy('gitignore', '.gitignore');
        },

        bower: function(){
            var bowerJson = {
                name: 'my-app', // TODO: make dynamic
                license: 'MIT',
                dependencies: {}
            };
            bowerJson.dependencies['angular'] = '~1.4.6';
            bowerJson.dependencies['angular-bootstrap'] = '~0.13.4';
            bowerJson.dependencies['angular-ui-router'] = '~0.2.15';
            bowerJson.dependencies['bootstrap-css-only'] = '~3.3.5';
            bowerJson.dependencies['lodash'] = '~3.10.1';
            bowerJson.dependencies['moment'] = '~2.10.6';
            bowerJson.dependencies['angular-ui-utils'] = '~3.0.0';
            this.fs.writeJSON('bower.json', bowerJson);

            this.copy('bowerrc', '.bowerrc');
        },

        appStaticFiles: function () {
            this.copy('_favicon.ico', 'src/favicon.ico');
            this.directory('styles', 'src/styles');
        },

        scripts: function () {
            this.fs.copyTpl(
                this.templatePath('app/_app.js'),
                this.destinationPath('src/app/app.js'),
                {
                    ngapp: 'myapp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('app/layout/_shell.controller.js'),
                this.destinationPath('src/app/layout/shell.controller.js'),
                {
                    ngapp: 'myapp'
            });
            this.fs.copyTpl(
                this.templatePath('app/home/_home.controller.js'),
                this.destinationPath('src/app/home/home.controller.js'),
                {
                    ngapp: 'myapp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('app/about/_about.controller.js'),
                this.destinationPath('src/app/about/about.controller.js'),
                {
                    ngapp: 'myapp'
                }
            );
        },

        html: function () {
            this.fs.copyTpl(
                this.templatePath('_index.html'),
                this.destinationPath('src/index.html'),
                {
                    appname: 'My Cool App',
                    ngapp: 'myapp'
                }
            );
            this.fs.copy(
                this.templatePath('app/layout/_shell.html'),
                this.destinationPath('src/app/layout/shell.html')
            );
            this.fs.copy(
                this.templatePath('app/home/_home.html'),
                this.destinationPath('src/app/home/home.html')
            );
            this.fs.copy(
                this.templatePath('app/about/_about.html'),
                this.destinationPath('src/app/about/about.html')
            );
        }

    },

    conflicts: function () {
    },

    install: function () {
    },

    end: function () {
    }

});