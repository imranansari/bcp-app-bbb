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
