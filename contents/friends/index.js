var friends = {

    searchByFriends: function(title) {

        title.replace(" ", "%20");

        $.get("https://protected-forest-7175.herokuapp.com/friends/list", function(data) {

            if (data){
                $.get("/twitter-jquery/friends/list.jade", function(template) {
                    var html = jade.render(template, {
                        friends: data.friends.users
                    });
                    $("#list").html(html)
                })
            }

        })

    },

    load: function() {

        $.get("/twitter-jquery/contents/friends/ui.jade", function(template) {
            var html = jade.render(template);
            $("#ui").html(html)
        });

        // default search results
        friends.searchByFriends('Babel')

    }

};