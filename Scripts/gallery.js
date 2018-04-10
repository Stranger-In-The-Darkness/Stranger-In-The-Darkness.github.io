loadCatImage('xml', 20, 'gallery-panel');

var maxedImg = null;

function onImgClick(sender) {
    if (maxedImg !== sender && maxedImg !== null) {
        $(maxedImg).removeClass('maximized');
        maxedImg = sender;
        $(sender).addClass('maximized');
    }
    else {
        maxedImg = sender;
        $(sender).toggleClass('maximized');
    }
}

function loadNewImages() {
    loadCatImage('xml', 10, 'gallery-panel');
}