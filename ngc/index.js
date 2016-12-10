'use strict';

var generators = require('yeoman-generator'),
    _ = require('lodash');

module.exports = generators.Base.extend({

    constructor: function () {
        generators.Base.apply(this, arguments);
        this.argument('name', { type: String, required: true });
        console.log('inside ngc sub-generator', this.name);
    },

    writing: function () {
        this.fs.copyTpl(
            this.templatePath('ng-controller.js'),
            this.destinationPath('src/app/' + this.name + '/' + this.name + '.controller.js'),
            {
                ctrlName: this.name,
                appName: this.config.get('ngappname')
            }
        );
    }

});