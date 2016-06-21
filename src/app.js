var $ = require('jquery');

$.ajax({
    url: "https://api.twitter.com/1.1/search/tweets.json?q=%23applemusic&result_type=mixed&count=10",
    type: "GET",
    cache: false,
    dataType: 'json',

    success: function(data) {
        alert('hello!');
        console.log(data);
    },
    error: function(html) {
        alert(html);
    },
    beforeSend: setHeader
});

let name = 'Mr. Bigglesworth';
const hello = `${name} will see you now.`;
