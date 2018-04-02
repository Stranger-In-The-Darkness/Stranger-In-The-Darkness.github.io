function onBtnClick(sender) {
    if (sender === 'first') {
        var x = document.getElementById('how');
        x.style.display = 'grid';

        var f = document.getElementById('first-button');
        f.style.display = 'none';

        var s = document.getElementById('second-button');
        s.style.display = 'initial';
    }
    if (sender === 'second') {
        var x = document.getElementById('like-this');
        x.style.display = 'grid';

        var s = document.getElementById('second-button');
        s.style.display = 'none';

        var t = document.getElementById('third-button');
        t.style.display = 'initial';
    }
    if (sender === 'third') {
        var x = document.getElementById('what-about');
        x.style.display = 'grid';

        var t = document.getElementById('third-button');
        t.style.display = 'none';

        var c = document.getElementById('bye-button');
        c.style.display = 'initial';

        document.getElementById('aside-btn-4').style.display = 'inline';
    }
    if (sender === 'end') {
        document.body.innerHTML = '<img src="Images\\the-end.png" width="500" style="margin = "0px 250px 0px 250px""/>';
    }
}

function onAsideBtnClick(sender)
{
    if (sender === 'first')
    {
        var x = document.getElementById('how');
        x.scrollIntoView();
    }
    if (sender === 'second') {
        var cond = document.getElementById('how');
        if (cond.style.display !== 'none') {
            var x = document.getElementById('like-this');
            x.scrollIntoView();
        }
        else {
            alert("Not so fast ;) You haven't seen everything yet)");
        }
    }
    if (sender === 'third') {
        var cond = document.getElementById('how');
        var cond2 = document.getElementById('like-this');
        if (cond.style.display !== 'none' & cond2.style.display !== 'none') {
            var x = document.getElementById('what-about');
            x.scrollIntoView();
        }
        else {
            alert("Not so fast ;) You haven't seen everything yet)");
        }
    }
    if (sender === 'meow') {
        document.getElementById('aside-panel').innerHTML += "<audio src=\"Audio\\meow1.mp3\" autoplay></audio>";
    }
}

function onNavBtnFocused(sender) {
    $("#" + sender).css("animation", "jump 2s ease-in infinite");
    document.getElementById(sender).style.animation = "jump 2s ease-in infinite";
}

function onNavBtnUnfocused(sender) {
    if (sender === 'first') {
        document.getElementById("nav-btn-img-1").style.animation = "shake 1s ease-in";
    }                                                              
    if (sender === 'second') {                                     
        document.getElementById("nav-btn-img-2").style.animation = "shake 1s ease-in";
    }                                                              
    if (sender === 'third') {                                      
        document.getElementById("nav-btn-img-3").style.animation = "shake 1s ease-in";
    }
}

function onFootNavBtnFocused(sender) {
    if (sender === 'first') {
        document.getElementById("footer-nav-btn-img-1").style.animation = "jump 2s ease-in infinite";
    }
    if (sender === 'second') {
        document.getElementById("footer-nav-btn-img-2").style.animation = "jump 2s ease-in infinite";
    }
    if (sender === 'third') {
        document.getElementById("footer-nav-btn-img-3").style.animation = "jump 2s ease-in infinite";
    }
}

function onFootNavBtnUnfocused(sender) {
    if (sender === 'first') {
        document.getElementById("footer-nav-btn-img-1").style.animation = "shake 1s ease-in";
    }
    if (sender === 'second') {
        document.getElementById("footer-nav-btn-img-2").style.animation = "shake 1s ease-in";
    }
    if (sender === 'third') {
        document.getElementById("footer-nav-btn-img-3").style.animation = "shake 1s ease-in";
    }
}

function onMenuBtnFocused(sender) {
    $("#" + sender).css("animation", "grow 1s ease-in infinite");
}

function onMenuBtnUnfocused(sender) {
    $("#" + sender).css("animation", "none");
}

function onDropDownMenuClick(sender) {
    if ($("#" + sender).css("display") === "none") {
        $("#" + sender).slideDown();
    }
    else {
        $("#" + sender).hide();
    }
}