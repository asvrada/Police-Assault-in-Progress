(function () {
    'use strict';

    // span in pixel
    var element = document.getElementsByClassName("text")[0];
    var span = 0;

    // get children total width
    for (var lop = 0; lop < 2; lop++) {
        span += element.children[lop].getBoundingClientRect().width;
    }

    console.log(span);
    
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
})();
