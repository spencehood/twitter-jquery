var friends = {

    load: function() {
        $.get("https://protected-forest-7175.herokuapp.com/friends/list", function(data) {

            if (data) {
                $.get("/twitter-jquery/friends/list.jade", function(template) {
                    var html = jade.render(template, {
                        friends: data.friends.users
                    });
                    $("#list").html(html)
                })
            }
        })
    }
};