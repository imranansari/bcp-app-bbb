require([
    // Global
    "app",

    // Libs
    "jquery",
    "backbone",

    //modules
    "modules/search",
    "modules/searchResult"

],

    function (app, $, Backbone, Search) {

        // Defining the application router, you can attach sub routers here.
        var Router = Backbone.Router.extend({
            routes:{
                "":"index"
            },

            index:function () {
                var searchCriteria = new Search.Views.SearchCriteria();

                // Attach the view to the DOM
                searchCriteria.render(function (el) {
                    $("#main").html(el);
                });
            }
        });

        // Treat the jQuery ready function as the entry point to the application.
        // Inside this function, kick-off all initialization, everything up to this
        // point should be definitions.
        $(function () {
            // Define your master router on the application namespace and trigger all
            // navigation from this instance.
            app.router = new Router();

            // Trigger the initial route and enable HTML5 History API support
            Backbone.history.start();
        });

        // All navigation that is relative should be passed through the navigate
        // method, to be processed by the router. If the link has a `data-bypass`
        // attribute, bypass the delegation completely.
        $(document).on("click", "a:not([data-bypass])", function (evt) {
            // Get the anchor href and protcol
            var href = $(this).attr("href");
            var protocol = this.protocol + "//";

            // Ensure the protocol is not part of URL, meaning it's relative.
            if (href && href.slice(0, protocol.length) !== protocol &&
                href.indexOf("javascript:") !== 0) {
                // Stop the default event to ensure the link will not cause a page
                // refresh.
                evt.preventDefault();

                // `Backbone.history.navigate` is sufficient for all Routers and will
                // trigger the correct events. The Router's internal `navigate` method
                // calls this anyways.
                Backbone.history.navigate(href, true);
            }
        });

    });
