define([
    //modules
    "jscroll",
    "listjs",

    // Application.
    "app"
],

    function (jScroll, List, app) {

        var SearchResult = app.module();

        SearchResult.Model = Backbone.Model.extend({

        });

        SearchResult.Collection = Backbone.Collection.extend({

        });


        function createConactList() {
        //Create Dummy Data List
            for (var i = 0; i < 200; i++) {
                $("#contact-list").append("<li>" +
                    " <a >" +
                    "<div class='title'>Homer J Simpson " + i + "</div>" +
                    "<div class='subtext'>Springfield, USA</div>" +
                    "</a>" +
                    "</li>");
            }
        }

        function doSearch (data) {
            var resultView = new SearchResult.Views.SearchResultView(data);
            app.router.navigate("searchResults");
            resultView.render(function (el) {
                $("#main").html(el);
                createConactList();
                //iScroll it
                $(".scolling_list_wrapper").jScroll({forceIscroll:true});

                //Filter it using list.js
                var options = {valueNames:['title']};
                var contactList = new List($(".scroller").get(0), options);

                //On Filter update we have to refresh iScroll because the data has changed
                contactList.on("updated", function () {
                    //console.log('update fired');
                    iScrollers[0].instance.refresh();
                });

            });
        }

        app.app.on('search', function (data) {
            doSearch(data);
            //console.log(data);
        });


        SearchResult.Views.SearchResultView = Backbone.View.extend({
            template:"app/templates/search_result",

            render:function (done) {
                var view = this;

                // Fetch the template, render it to the View element and call done.
                app.fetchTemplate(this.template, function (tmpl) {
                    view.el.innerHTML = tmpl(view.options);

                    // If a done function is passed, call it with the element
                    if (_.isFunction(done)) {
                        done(view.el);
                    }
                });
            }

        });

        return SearchResult;

    });
