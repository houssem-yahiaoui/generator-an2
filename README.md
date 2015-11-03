# AngularJS 2 Generator

![ngloveyo](ngloveyo.jpg)


AngualarJS 2.0 knew a tramadic changes over the pat nonths and for that matter, new concept have been introduced
and one of them is the Component.

And so we have the normal way and it's by creating the file it self and make the needed addiction and configure everything with your app and then you install a live server that let you Launch your application
i don't know about you but this process is really teades for me personally.So and because of that i've created AN2 Generator.

## Usage :

In order to have a full complete vision please check out this article.

[AN2 - Starter Article](https://medium.com/@houssemyahiaoui/angularjs-2-yeoman-generator-an2-ff7f705b3f80)

Or just follow the steps bellow :

1 - Install `Yo` , `Bower` , `Grunt-Cli` and for our case we will use `Gulp` you will find a development version bundled with 
the end result but yu ned to instal it in your development machine : 

``` 
 $ npm install -g bower  grunt-cli  gulp  yo
```

2 - Make yourself a working directory where you will scaffold your application, in direct or through command-line :

```
 $ mkdir dev-code 
```

3 - Simply Run the following command:

```
 $ yo an2
```

### Notice :

In this version of the app we will assume that you will work using `TypeScript`that's why all the generated fiels will be in `TypeScript`

```
import {Component} from 'angular2/angular2';

@Component({
  selector : 'my-app',
  template : '<span>Hello world !</span>',
})

export class componentName {
  public hello : string = 'Hello !';
}
```

# Sub-Generator :

For this matter we introduced the `cmp` sub generator, thi last will be responsible of creating the 3 different kind of files : 
`.ts` & `.html` & `.css`, and all that will be in a supported naming convention for th overall file name : `componentName.Component.ts/html/css` or just a plane naming `componentName.ts\html\css`.
Using this command :

```
$ yo an2:create hero 
```

Where :

1 - an2 : is the name of the generator.

2 - create : is yeoman way to launh the sub generator, and in our case it's called : `create` and the `:` is critical.

## Launching the Application :

AN2 Generator comes with pre-configuration files and we use `live-server` and the `tsc` the TypeScript compiler and it will run using the following commands 

```
$ npm start #In order to launch the Liver-Server module.
```

And :

```
$ npm run tsc #In order to launch the TypeScript Compiler.
```


## Changelog

Recent changes can be viewed on Github on the [Releases Page](https://github.com/yeoman/generator-angular/releases)

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)

 

