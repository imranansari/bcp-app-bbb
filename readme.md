## Project Setup

* Install NodeJS
* Install grunt
* Install bbb
    npm install -g bbb
* Install handlebars
    npm install handlebars


Handlebars grunt task is under the tasks folder -> handlebars.js

## Config

Add handlebars to the requirejs shim
<code>
        handlebars:{
            deps:["jquery"],
            exports:"Handlebars"
        }
 </code>


## app.js
<code>
define([
    // Libs
    "jquery",
    "lodash",
    "backbone",
    "handlebars"
],

    function ($, _, Backbone, Handlebars) {
        return {
            // This is useful when developing if you don't want to use a
            // build process every time you change a template.
            //
            // Delete if you are using a different template loading method.
            fetchTemplate:function (path, done) {
                path = path + ".html";


                var JST = window.JST = window.JST || {};

                if (JST[path]) {
                    return done(Handlebars.template(JST[path]));
                }

                $.get(path, function (contents) {
                    var tmpl = Handlebars.compile(contents);

                    done(JST[path] = tmpl);
                }, "text");

            },

            // Create a custom object with a nested Views object
            module:function (additionalProps) {
                return _.extend({ Views:{} }, additionalProps);
            },

            // Keep active application instances namespaced under an app object.
            app:_.extend({}, Backbone.Events)
        };
    });
</code>




## This Project uses Backbone Boilerplate

Backbone Boilerplate
====================

This boilerplate is the product of much research and frustration.  Existing
boilerplates freely modify Backbone core, lack a build process, and are
very prescriptive; this boilerplate changes that.

Organize your application in a logical filesystem, develop your
Models/Collections/Views/Routers inside modules, and build knowing you have
efficient code that will not bottleneck your users.

## Documentation ##

View the Backbone Boilerplate documentation here:

[GitHub Wiki](https://github.com/tbranyen/backbone-boilerplate/wiki)

## Build process ##

To use the new and improved build process, please visit the 
[grunt-bbb](https://github.com/backbone-boilerplate/grunt-bbb)
plugin repo and follow the instructions to install.  Basing your project off
this repo will allow the `bbb` commands to work out-of-the-box.
