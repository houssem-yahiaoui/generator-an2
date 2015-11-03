/*
    Sub-Generator for creating AN2 - components this module will creat 3 set of file
        1 - A JS6 with TypeScript components.
        2 - A Component-Name.component.html file, with the respective naming convention.
        3 - A Component-Name.component.css file, as styling file with the respective naming convention.
 */

'use strict';

var generator = require('yeoman-generator'),
    fes = require('fs-extra'),
	chalk = require('chalk');

module.exports = generator.NamedBase.extend({
	
    _createFileSetup : function () {
    	var destRoot = this.destinationRoot(),
            sourceRoot = this.sourceRoot(),
            srcDestDir   = destRoot + '/src',
            templateContext = {
                compName : this.name,
                namConv : this.namConv,
                overBoots : this.overBoots
            };

    	if (this.namConv === 'yes') {
    		this.fs.copyTpl(this.sourceRoot() + '/Component.ts', srcDestDir + '/Front/App/'+this.name+'.Component.ts', templateContext);
    		this.fs.copy(this.sourceRoot() + '/Component.html', srcDestDir + '/Front/App/'+this.name+'.Component.html');
    		this.fs.copy(this.sourceRoot() + '/Component.css', srcDestDir + '/Front/App/'+this.name+'.Component.css');
    	} else if (this.namConv === 'no') {
    		this.fs.copyTpl(this.sourceRoot() + '/Component.ts', srcDestDir + '/Front/App/'+this.name+'.ts', templateContext);
    		this.fs.copy(this.sourceRoot() + '/Component.html', srcDestDir + '/Front/App/'+this.name+'.html');
    		this.fs.copy(this.sourceRoot() + '/Component.css', srcDestDir + '/Front/App/'+this.name+'.css');
    	} 
    	if (this.overBoots === 'yes') {
            fes.remove(srcDestDir+'/Front/App/bootstrap.ts');
    		this.fs.copyTpl(this.sourceRoot() + '/bootstrap.ts', srcDestDir + '/Front/App/bootstrap.ts', templateContext);

     	}
    },

    constructor: function () {
    	generator.NamedBase.apply(this, arguments);
    	
    	/*this.argument(this.name, {
    		required : true,
    		desc: 'This Argument define the generated NG2 Component Name'
    	});*/
    },

    _getPromt : function () {
    	var msgs = [
    		{
    			name : 'namConv',
    			message : 'Do you want to follow this convention : "ComponentName.Component.ts/html/css" ?',
    			default : 'yes'
    		},
    		{
    			name : 'overBoots',
    			message : 'Do you want to over-wright the Bootstrap file ?',
    			default : 'no'
    		}
    	];

    	return msgs;
    },

    initialize : function () {
    	this.log(chalk.yellow.bold('\n[*] ')+chalk.white.bold('NG2 : Component Generator\n'));
    },

    prompting : function () {
    	var done = this.async();
    	this.prompt(this._getPromt(), function (resp) {
    		this.namConv = resp.namConv.toLowerCase();
    		this.overBoots = resp.overBoots.toLowerCase();
    		done();
    	}.bind (this));
    },

    writing : function () {
    	this.log(chalk.yellow.bold('\n [*] ') + chalk.white.bold('Writing System Files \n'));
    	this._createFileSetup();
    }
});