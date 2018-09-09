'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var key = require('./keydown');

var modal = {
    open: function open(btnToOpen, container) {
        $(btnToOpen).click(function (e) {
            e.preventDefault();

            $(container).addClass('openModal');
        });
    },
    close: function close(container) {
        key.escape('openModal', true);

        $(document).on('mouseup touchstart', function (e) {
            var block = $('.no-touch ' + container);

            if (!block.is(e.target) && block.has(e.target).length === 0 && block.parent().hasClass('openModal')) {
                $('.openModal').removeClass('openModal');
            }
        });
    },
    onlyBtnClose: function onlyBtnClose(el) {
        $('body').delegate(el, 'click', function (e) {
            e.preventDefault();
            $('.openModal').removeClass('openModal');
        });
    }
};

exports['default'] = modal;
module.exports = exports['default'];