var favorites = {

    load: function() {

        $.get("https://protected-forest-7175.herokuapp.com/favorites/list/", function(data) {

            if (data){
                $.get("/twitter-jquery/favorites/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data.tweets
                    });
                    $("#list").html(html)
                })
            }
        });
        //$.get("/twitter-jquery/favorites/ui.jade", function(template) {
        //    var html = jade.render(template);
        //    $("#ui").html(html)
        //});
        //
        //// default search results
        //favorites.searchByName('Abe')

    }

};