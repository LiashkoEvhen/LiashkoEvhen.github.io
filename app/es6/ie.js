let ie = () => {
    let rv = -1;
    let ua, re;
    let navigatorName = navigator.appName;

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

export default ie;