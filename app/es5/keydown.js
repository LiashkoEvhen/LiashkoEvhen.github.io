'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var key = {
    escape: function escape(container) {
        var esc = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

        $(document).keydown(function (e) {
            if (e.keyCode == 27) {
                $('.' + container).removeClass(container);
            }
        });
    }
};

exports['default'] = key;
module.exports = exports['default'];