'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var inputFocus = function inputFocus() {
    $('label input').on({
        focus: function focus() {
            $(this).parent().addClass('focusIn');

            if (!$(this).hasClass('js--dropdown')) return false;

            $(this).parent().addClass('showTab');

            var listId = $(this).parent().data('list-id');

            $('.drop .box-height').hide();
            $('.drop').show();
            $('.drop .box-height[data-list-type=' + listId + ']').show();
        },
        blur: function blur() {
            var $self = $(this);

            $self.parent().removeClass('showTab');

            if ($self.val() == '') {
                $self.parent().removeClass('focusIn');
            }
        }
    });
};

exports['default'] = inputFocus;

$(document).on('touchend mouseup', function (e) {
    var block = $('.drop'),
        block1 = $('.js--dropdown');

    if (!block.is(e.target) && block.has(e.target).length === 0 && block.is(':visible') && !block1.is(e.target) && block1.has(e.target).length === 0) {
        $('.drop').hide();
        $('.showTab').removeClass('showTab');
    }
});
module.exports = exports['default'];