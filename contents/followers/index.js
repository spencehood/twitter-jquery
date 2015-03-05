/**
 * Created by Tanvi on 2/27/15.
 */
var followers = {

    load: function () {
        $.get("https://protected-forest-7175.herokuapp.com/followers/list", function(data) {

            $.get("/twitter-jquery/followers/list.jade", function(template) {

                var html = jade.render(template, {friends: data.friends.users});

                $("#list").html(html)
            })
        })
    }
};
