function zakladka1() {
    var elem = document.getElementById("right-panel");
    var width = 0;
    var id = setInterval(frame, 1);

    function frame() {
        if (width == -200) {
            clearInterval(id);
        } else {
            width--;
            elem.style.marginLeft = width + 'px';
        }
    }
}

function zakladka2() {
    var elem = document.getElementById("right-panel");
    var width = 0;
    var id = setInterval(frame, 1);

    function frame() {
        if (width == -200) {
            clearInterval(id);
        } else {
            width--;
            elem.style.marginLeft = width + 'px';
        }
    }
}

function zakladka3() {
    var elem = document.getElementById("left-panel");
    var width = 0;
    var id = setInterval(frame, 1);

    function frame() {
        if (width == 250) {
            clearInterval(id);
        } else {
            width++;

            elem.style.marginLeft = width + 'px';
        }
    }
}

function zakladka4() {
    var elem = document.getElementById("left-panel");
    var width = 0;
    var id = setInterval(frame, 1);

    function frame() {
        if (width == -100) {
            clearInterval(id);
        } else {
            width--;

            elem.style.marginLeft = width + 'px';
        }
    }
}