// JavaScript source code
var catX = 1;
var catY = 1;

var mouseX = 3;
var mouseY = 2;

var cheesX = 2;
var cheesY = 7;

cat = "Images\\cat.png";
mouse = "Images\\mouse.png";
chees = "Images\\chees.png";
alarm = "Images\\alarm.png";
tiles = {
    bl: "",
    bc: "",
    br: "",
    f: "Images\\floor.png",
    kl: "",
    kc: "",
    kr: "",
    w1: "Images\\wall1.png",
    w2: "Images\\wall2.png",
    w3: "Images\\wall3.png",
    w4: "Images\\wall4.png",
    wc: "Images\\wallc.png",
    wb: "Images\\wallb.png",
    t: "Images\\table.png",
    S: "Images\\carpet.png",
    M: "",
    C: ""
}

var map =
    new Array(
        new Array('f', 'bl-ur', 'bc-u', 'br-ul', 'f', 'f', 'kl-ur', 'ku-u'),
        new Array('f', 'S', 'f', 'f', 'f', 'f', 'f', 'f'),
        new Array('w2-u', 'w3-l', 'f', 't', 'f', 'wb-dr', 'w3-l', 'C'),
        new Array('f', 'f', 'M', 'f', 'f', 'w2-l', 'f', 'f')
    );

function moveCat(evt) {
    var x = document.getElementById("f" + String(catX) + String(catY));
    x.style.display = "none";

    switch (evt.keyCode) {
        //Left
        case 37:
            catY -= 1;
            if (catY < 0) {
                catY = 0;
            }
            var nm = map[catX][catY];
            if (nm.indexOf('w') !== -1 || nm.indexOf('b') !== -1 || nm.indexOf('k') !== -1 || nm === 't') {
                catY += 1;
            }
            break;
            //Up
        case 38:
            catX -= 1;
            if(catX < 0){
                catX = 0;
            }
            var nm = map[catX][catY];
            if (nm.indexOf('w') !== -1 || nm.indexOf('b') !== -1 || nm.indexOf('k') !== -1 || nm === 't') {
                catX += 1;
            }
            break;
            //Right
        case 39:
            catY += 1;
            if (catY > 7) {
                catY = 7;
            }
            var nm = map[catX][catY];
            if (nm.indexOf('w') !== -1 || nm.indexOf('b') !== -1 || nm.indexOf('k') !== -1 || nm === 't') {
                catY -= 1;
            }
            break;
            //Down
        case 40:
            catX += 1;
            if (catX > 3) {
                catX = 3;
            }
            var nm = map[catX][catY];
            if (nm.indexOf('w') !== -1 || nm.indexOf('b') !== -1 || nm.indexOf('k') !== -1 || nm === 't') {
                catX -= 1;
            }
            break;
            //E
        case 69:
            break;
    }

    x = document.getElementById("f" + String(catX) + String(catY));
    x.src = cat;
    x.style.display = "inline";
}

function moveMouse() {

}

addEventListener("keydown", moveCat);

function loadMap() {
    for (i = 0; i < 4; i++) {

        var block = document.getElementById("field");
        block.innerHTML += "<tr></tr>";
        for (i2 = 0; i2 < 8; i2++)
        {
            block.children[i].innerHTML +=
                "<td style=\"position: relative;\">" +
                "<img " +
                "id= \"" + "b" + String(i) + String(i2) + "\" " +
                "style= \"" +
                "width: 100px; " +
                "height: 100px; " +
                "position: absolute; " +
                "top: 0px;" +
                "left: " + (i2*100) + "px;" +
                "display: inline; \"" +
                "src= \"\" />" +
                "<img " +
                "id=\"" + "f" + String(i) + String(i2) + "\" " +
                "style=\"" +
                "width: 100px; " +
                "height: 100px; " +
                "position: absolute; " +
                "top: 0px;" +
                "left: " + (i2 * 100) + "px;" +
                "display: none; \"" +
                "src=\"\" />" +
                "</td>";
        }
        var row = map[i];

        for (i2 = 0; i2 < 8; i2++) {

            var c = map[i][i2] = row[i2];
            switch (c.split("-")[0]) {
                case 'S':
                    var back = document.getElementById('b' + String(i) + String(i2));
                    back.src = tiles.S;
                    var front = document.getElementById('f' + String(i) + String(i2));
                    front.src = cat;
                    front.style.display = 'inline';
                    break;
                case 'M':
                    var back = document.getElementById('b' + String(i) + String(i2));
                    back.src = tiles.f;
                    var front = document.getElementById('f' + String(i) + String(i2));
                    break;
                case 'C':
                    var back = document.getElementById('b' + String(i) + String(i2));
                    back.src = tiles.f;
                    break;
                case 'f':
                    var back = document.getElementById('b' + String(i) + String(i2));
                    back.src = tiles.f;
                    break;
                case 'bl':
                    break;
                case 'bc':
                    break;
                case 'br':
                    break;
                case 'k':
                    break;
                case "w1":
                    var back = document.getElementById('b' + String(i) + String(i2));
                    back.src = tiles.w1;

                    if (c.split("-")[1] === 'u') {
                        back.style.transform = "rotate(180deg)";
                    }
                    if (c.split("-")[1] === 'r') {
                        back.style.transform = "rotate(270deg)";
                    }
                    if (c.split("-")[1] === 'd') {
                        back.style.transform = "rotate(360deg)";
                    }
                    if (c.split("-")[1] === 'l') {
                        back.style.transform = "rotate(90deg)";
                    }
                    break;
                case 'w2':
                    var back = document.getElementById('b' + String(i) + String(i2));
                    back.src = tiles.w2;

                    if (c.split("-")[1] === 'u') {
                        back.style.transform = "rotate(0deg)";
                    }
                    if (c.split("-")[1] === 'r') {
                        back.style.transform = "rotate(90deg)";
                    }
                    if (c.split("-")[1] === 'd') {
                        back.style.transform = "rotate(0deg)";
                    }
                    if (c.split("-")[1] === 'l') {
                        back.style.transform = "rotate(90deg)";
                    }
                    break;
                case 'w3':
                    var back = document.getElementById('b' + String(i) + String(i2));
                    back.src = tiles.w3;

                    if (c.split("-")[1] === 'u') {
                        back.style.transform = "rotate(90deg)";
                    }
                    if (c.split("-")[1] === 'r') {
                        back.style.transform = "rotate(180deg)";
                    }
                    if (c.split("-")[1] === 'd') {
                        back.style.transform = "rotate(270deg)";
                    }
                    if (c.split("-")[1] === 'l') {
                        back.style.transform = "rotate(0deg)";
                    }
                    break;
                case 'w4':
                    var back = document.getElementById('b' + String(i) + String(i2));
                    back.src = tiles.w4;
                    break;
                case 'wc':
                    var back = document.getElementById('b' + String(i) + String(i2));
                    back.src = tiles.wc;
                    break;
                case 'wb':
                    var back = document.getElementById('b' + String(i) + String(i2));
                    back.src = tiles.wb;
                    if (c.split("-")[1].indexOf('u') !== -1) {
                        if (c.split("-")[1].indexOf('r') !== -1) {
                            back.style.transform = "rotate(180deg)";
                        }
                        if (c.split("-")[1].indexOf('l') !== -1) {
                            back.style.transform = "rotate(90deg)";
                        }
                    }
                    if (c.split("-")[1].indexOf('r') !== -1) {
                        if (c.split("-")[1].indexOf('u') !== -1) {
                            back.style.transform = "rotate(180deg)";
                        }
                        if (c.split("-")[1].indexOf('d') !== -1) {
                            back.style.transform = "rotate(-90deg)";
                        }
                    }
                    if (c.split("-")[1].indexOf('d') !== -1) {
                        if (c.split("-")[1].indexOf('r') !== -1) {
                            back.style.transform = "rotate(-90deg)";
                        }
                        if (c.split("-")[1].indexOf('l') !== -1) {
                            back.style.transform = "rotate(0deg)";
                        }
                    }
                    if (c.split("-")[1].indexOf('l') !== -1) {
                        if (c.split("-")[1].indexOf('u') !== -1) {
                            back.style.transform = "rotate(90deg)";
                        }
                        if (c.split("-")[1].indexOf('d') !== -1) {
                            back.style.transform = "rotate(0deg)";
                        }
                    }
                    break;
                case 't':
                    var back = document.getElementById('b' + String(i) + String(i2));
                    back.src = tiles.t;
                    break;
            }
        }
    }
}

function loaded() {
    var x = document.getElementById("animation");
    x.style.display = "none";

    x = document.getElementById("field");
    x.style.animation = "fade 5s";
}

loadMap();