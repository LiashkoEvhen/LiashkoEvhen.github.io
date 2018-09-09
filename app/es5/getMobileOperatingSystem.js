"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var getMobileOperatingSystem = function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        var android = "Android";

        android = android.toLowerCase();
        return android;
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        var ios = "ios";

        ios = ios.toLowerCase();
        return ios;
    }

    return "unknown";
};

exports["default"] = getMobileOperatingSystem;
module.exports = exports["default"];