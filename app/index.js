'use strict';

var generator = require('yeoman-generator'),
    yosay = require('yosay'),
    chalk = require('chalk'),
    username = require('username'),
    mkdirp = require('mkdirp');

module.exports = generator.Base.extend({

    _createProjectFileSystem : function () {
        var destRoot = this.destinationRoot(),
            sourceRoot = this.sourceRoot(),
            srcDestDir   = destRoot + '/src',
            templateContext = {
                appName : this.appname,
                appAuthor : this.appauthor,
                appLicence: this.applicence,
                namConv : this.namConv
            };

        mkdirp(srcDestDir + '/Front');
        mkdirp(srcDestDir + '/Front/img');
        mkdirp(srcDestDir + '/Front/styles');
        mkdirp(srcDestDir + '/Front/App');

        this.fs.copyTpl(this.sourceRoot() + '/package.json', destRoot + '/package.json', templateContext);
        this.fs.copy(this.sourceRoot() + '/CONTRIBUTING.md', destRoot + '/CONTRIBUTING.md');
        this.fs.copy(this.sourceRoot() + '/README.md', destRoot+ '/README.md');
        this.fs.copy(this.sourceRoot() + '/.jshintrc', destRoot + '/.jshintrc');
        this.fs.copyTpl(this.sourceRoot() + '/humans.txt', destRoot + '/humans.txt', templateContext);
        this.fs.copy(this.sourceRoot() + '/tsconfig.json', srcDestDir + '/Front/tsconfig.json');
        this.fs.copy(this.sourceRoot() + '/index.html', srcDestDir + '/Front/index.html');
        this.fs.copy(this.sourceRoot() + '/main.css', srcDestDir + '/Front/styles/main.css');
        this.fs.copy(this.sourceRoot() + '/theme.css', srcDestDir + '/Front/styles/theme.css');
        this.fs.copy(this.sourceRoot() + '/ngloveyo.jpg', srcDestDir + '/Front/img/ngloveyo.jpg');
        this.fs.copy(this.sourceRoot() + '/favicon.ico', srcDestDir + '/Front/favicon.ico');

        if (this.namConv === 'yes') {
            this.fs.copyTpl(this.sourceRoot() + '/App.Component.ts', srcDestDir + '/Front/App/'+this.appname+'.Component.ts', templateContext);
            this.fs.copyTpl(this.sourceRoot() + '/App.Component.html', srcDestDir + '/Front/App/'+this.appname+'.Component.html', templateContext);
            this.fs.copyTpl(this.sourceRoot() + '/App.Component.css', srcDestDir + '/Front/App/'+this.appname+'.Component.css', templateContext);
        } else if (this.namConv === 'no'){
            this.fs.copyTpl(this.sourceRoot() + '/App.Component.ts', srcDestDir + '/Front/App/'+this.appname+'.ts', templateContext);
            this.fs.copyTpl(this.sourceRoot() + '/App.Component.html', srcDestDir + '/Front/App/'+this.appname+'.html', templateContext);
            this.fs.copyTpl(this.sourceRoot() + '/App.Component.css', srcDestDir + '/Front/App/'+this.appname+'.css', templateContext);
        }
        
        this.fs.copyTpl(this.sourceRoot() + '/bootstrap.ts', srcDestDir + '/Front/App/bootstrap.ts', templateContext);
    },
    _getPromt : function () {
        var promt = [
            {
                name : 'name',
                message : 'what is the name of your project',
                default : this.appname
            },
            {
                name : 'author',
                message : 'Name of maintainer of the project',
                default : this.author
            },
            {
                name : 'licence',
                message : 'your work licence',
                default : this.licence
            },
            {
                name : 'Yes_Conv',
                message : 'do you want to follow the naming convension : "ComponentName.Component.ts/html/css" ?',
                default : 'yes'
            }
        ];
        return promt;
    },

    /*constructor : function () {
        generator.Base.apply(this, arguments);

        this.argument('word',{
            required : false,
            desc : 'a simple argumens test only'
        });

        this.option('sass', {
            desc : "Hello from sass"
        })
    },*/

    initializing : function () {
        var msg = chalk.white.bgRed.bold('Yoo Welcome to AN2 ' + username.sync() + '\n') + chalk.white.bold('Angular-2 App/Sub Gen');
        this.log(yosay(msg));
    },

    prompting : function () {
        var done = this.async();
        this.prompt(this._getPromt(), function (answer) {
            this.appname = answer.name;
            this.appauthor = answer.author;
            this.applicence = answer.licence;
            this.namConv = answer.Yes_Conv.toLowerCase();
            done();
        }.bind (this));
    },

    configuring : function () {
        
    },

    writing : function () {
        this.log(chalk.yellow.bold('\n [*] ') + chalk.white.bold('Writing System Files \n'));
        this._createProjectFileSystem();
    },

    install : function () {
        this.log(chalk.yellow.bold('\n [*] ') + chalk.white.bold('Installing Dependencies' +'\n'));
        this.npmInstall();
    }

});
