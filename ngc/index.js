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
        var fileNameFragment = getFileNameFragment(this.name);

        this.fs.copyTpl(
            this.templatePath('ng-controller.js'),
            this.destinationPath('src/app/' + fileNameFragment + '/' + fileNameFragment + '.controller.js'),
            {
                ctrlName: this.name,
                appName: this.config.get('ngappname')
            }
        );

        function getFileNameFragment(ctrlName) {
            var ctrlIndex = ctrlName.indexOf('Ctrl');
            if (ctrlIndex === (ctrlName.length - 4)) {
                ctrlName = ctrlName.substring(0, ctrlIndex);
            }
            return _.kebabCase(ctrlName);
        }
    }

});