define([
    // Application.
    "app"
],

    function (app) {

        var Search = app.module();

        Search.Model = Backbone.Model.extend({

        });

        Search.Collection = Backbone.Collection.extend({

        });

        Search.Views.SearchCriteria = Backbone.View.extend({
            template:"app/templates/search",

            events:{
                "click #search":"doSearch"
            },

            render:function (done) {
                var view = this;

                // Fetch the template, render it to the View element and call done.
                app.fetchTemplate(this.template, function (tmpl) {
                    view.el.innerHTML = tmpl({name:'imran'});

                    // If a done function is passed, call it with the element
                    if (_.isFunction(done)) {
                        done(view.el);
                    }
                });
            },

            doSearch:function () {
                console.log('a');
                //console.log(Contactlist);
                app.trigger('search', {"test":"imran"});
            }

        });

        return Search;

    });
