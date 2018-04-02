var variants;
var index = 0;

function loadCatFact(number = 50) {
    var yql_url = 'https://query.yahooapis.com/v1/public/yql';
    var url = 'https://cat-fact.herokuapp.com/facts/random?callback=?&amount=' + String(number);

    $.ajax({
        'url': yql_url,
        'data': {
            'q': 'SELECT * FROM json WHERE url="' + url + '"',
            'format': 'json',
            'jsonCompat': 'new',
        },
        'dataType': 'jsonp',
        'success': function (response) {
            console.log(response);
            variants = response.query.results.json.json;
            timeoutTextChange();
        },
    });
}

function timeoutTextChange() {
    console.log(index);
    $('#cat-fact').text(variants[index].text);
    index++;
    index %= 50;
    setTimeout(timeoutTextChange, 30000);
}