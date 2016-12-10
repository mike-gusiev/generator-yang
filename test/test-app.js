'use strict';
var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;


describe('yang:app', function (){

    describe('default', function (){

        before(function (done) {
            helpers.run(path.join(__dirname, '../app'))
                .withArguments(['MyCoolApp'])
                .withOptions({ skipInstall: true })
                .on('end', done);
        });

        it('creates files', function (){
            assert.file([
                'package.json',
                'src/app/app.js',
                '.bowerrc',
                '.gitignore',
                '.jshintrc',
                'bower.json',
                'gulp.config.js',
                'gulpfile.js'
            ])
        });
    });

});