// Set the require.js configuration for your application.
require.config({
    // Initialize the application with the main application file
    deps:["main"],

    paths:{
        // JavaScript folders
        libs:"../assets/js/libs",
        plugins:"../assets/js/plugins",

        // Libraries
        jquery:"../assets/js/libs/jquery",
        lodash:"../assets/js/libs/lodash",
        backbone:"../assets/js/libs/backbone",
        handlebars:"../assets/js/libs/handlebars.1.0.0.beta.3",
        iscroll:"../assets/js/libs/iScroll",
        jscroll:"../assets/js/libs/jScroll",
        listjs:"../assets/js/libs/list.min"
    },

    shim:{
        backbone:{
            deps:["lodash", "jquery"],
            exports:"Backbone"
        },
        handlebars:{
            deps:["jquery"],
            exports:"Handlebars"
        },
        jscroll:{
            deps:["iscroll"],
            exports:"jScroll"
        },
        listjs:{
            exports:"List"
        }
    }
});
