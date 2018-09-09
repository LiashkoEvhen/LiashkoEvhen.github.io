let key = {
    escape: (container, esc = false)=> {
        $(document).keydown(function (e) {
            if (e.keyCode == 27) {
                $('.' + container).removeClass(container);
            }
        });
    }
};

export default key;