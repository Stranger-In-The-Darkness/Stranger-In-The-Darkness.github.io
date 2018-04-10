var variants = [];
var index = 1;

function loadCatImage(format = 'src', number = 1, parentHTMLElement = null) {
    var url = 'http://thecatapi.com/api/images/get';
    $.ajax
        ({
            'url': url,
            'data': {
                'api_key': 'MjkzNzY2',
                'format': String(format),
                'results_per_page': number
            },
            'success':
            (entry) => {
                var xmlDoc = new XMLSerializer().serializeToString(entry.documentElement);
                deserializeCats(xmlDoc, parentHTMLElement);
            },
            'error': () => { alert('Error loading. Try again later ;)'); },
            'done': () => { alert('Done'); }
        });
}

function deserializeCats(text, parentHTMLElement = null) {
    var parser = new DOMParser();
    var xml = parser.parseFromString(text, "text/xml");

    var array = Array.from(xml.getElementsByTagName('url'));

    var res = "";
    for (i = 0; i < array.length; i++) {
        variants[i] = array[i].innerHTML;
        if (parentHTMLElement) {
            res += `<img src="${array[i].innerHTML}" class="gallery" width="150" height="150" onclick="onImgClick(this)" /> `;
        }    
    }
    if (parentHTMLElement) {
        document.getElementById(parentHTMLElement).innerHTML += res;
    }
}