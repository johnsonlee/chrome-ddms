'use strict';

function e() {
    var a = parseInt(navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10);
    var b = "other";

    - 1 != navigator.appVersion.indexOf("Linux") ? b = "linux" : -1 != navigator.appVersion.indexOf("CrOS") ? b = "cros" : -1 != navigator.appVersion.indexOf("Mac OS X") && (b = "mac");
    return "linux" === b && 27 > a || "mac" === b && 25 > a;
}

chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('index.html', {
        width : 400,
        height : 400,
    }, function(w) {
        w.onClosed.addListener(function() {
            console.log('Window closed');
        });
    });
});
