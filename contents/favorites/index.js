var favorites = {

    searchByName: function(name) {

               var name = name || 'Abe';

        $.get("https://protected-forest-7175.herokuapp.com/favorites/list/"+ name, function(data) {

            console.log('got ' + data);
            if (data){
            $.get("/twitter-jquery/favorites/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data.tweets
                    });
                    console.log(html);
                    $("#list").html(html)
                })
            }
        })

    },

    
  
    load: function() {

        $.get("/twitter-jquery/favorites/ui.jade", function(template) {
            var html = jade.render(template);
            $("#ui").html(html)
        });

        // default search results
        favorites.searchByName('Abe')

    }

};