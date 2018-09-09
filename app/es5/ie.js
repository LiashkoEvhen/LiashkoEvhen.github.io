'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var ie = function ie() {
    var rv = -1;
    var ua = undefined,
        re = undefined;
    var navigatorName = navigator.appName;

    if (navigatorName == 'Microsoft Internet Explorer') {
        ua = navigator.userAgent;
        re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");

        if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
    } else if (navigatorName == 'Netscape') {
        ua = navigator.userAgent;
        re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");

        if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
    }
    return rv;
};

exports['default'] = ie;
module.exports = exports['default'];