let getMobileOperatingSystem = ()=> {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;


    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        let android = "Android";

        android = android.toLowerCase();
        return android;
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        let ios = "ios";

        ios = ios.toLowerCase();
        return ios;
    }

    return "unknown";
};

export default getMobileOperatingSystem;