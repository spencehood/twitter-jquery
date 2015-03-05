var tweets = {

    searchByQuery: function (query) {
        query = query.replace(" ", "%20");
        $('#loading').text('Loading...');
        $.get("https://protected-forest-7175.herokuapp.com/search/tweets/" + query, function (data) {
            $.get("/twitter-jquery/tweets/list.jade", function(template) {
                var html = jade.render(template, {tweets: data.tweets.statuses});
                $("#list").html(html);
                $("#tweets_search").val(query);
                $('#loading').text('');
            })
        })
    },

    load: function() {

        var defaultQuery = "all";
        $('#loading').text('Loading...');
        $.get("https://protected-forest-7175.herokuapp.com/search/tweets/" + defaultQuery, function (data) {
            $.get("/twitter-jquery/tweets/list.jade", function(template) {
                var html = jade.render(template, {tweets: data.tweets.statuses});
                $("#list").html(html);
                $("#tweets_search").val(defaultQuery);
                $('#loading').text('');
            })
        });
    }
};