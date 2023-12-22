/* eslint-env browser */

(function () {
    'use strict';

    // create font
    var customFont = new FontFace('DINEngschrift', 'url(css/font/DINEngschrift-Regular.ttf)');
    // add it to font faces
    document.fonts.add(customFont);
    // load it
    customFont.load();
    // on ready
    customFont.loaded.then(() => {
        // run the animation
        animation();
    });
})();

function animation() {
    // span in pixel
    var element = document.getElementsByClassName("text")[0];
    var span = 0;

    // get children total width
    for (var lop = 0; lop < 2; lop++) {
        span += element.children[lop].getBoundingClientRect().width;
    }

    // config animation, in milli sec
    var duration = 3500;

    // runtime
    var prevTime = new Date();
    var sum = 0;

    var progress = 0;

    setInterval(function () {
        var curTime = new Date();
        var delta = curTime - prevTime;
        prevTime = curTime;

        sum += delta;
        if (sum >= duration) {
            progress -= span;
            sum -= duration;
        }

        progress += delta / duration * span;

        element.style.left = `${-progress}px`;
    }, 1000 / 60);
}

