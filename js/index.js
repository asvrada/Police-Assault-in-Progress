(function () {
    'use strict';
    
    // load music
    loadMusic();

    // create font
    var customFont = new FontFace('Custom Font', 'url(css/font/PT_Sans-Web-Regular.ttf)');
    // add it to font faces
    document.fonts.add(customFont);
    // load it
    customFont.load();

    // on ready
    customFont.loaded.then((e) => {
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
    var duration = 5000;

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
    });
}

function loadMusic() {
    var player = document.getElementById("audio-tag");
    var btnToggle = document.getElementById("btnToggle");
    
    var isShown = true;
    
    btnToggle.addEventListener('click', function() {
        if (isShown) {
            // hide
            player.style.display = "none";
        } else {
            // show
            player.style.display = "block";
        }
        
        isShown = !isShown;
    });
    
    player.play();
}
