'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var menuBtn = function menuBtn() {
    $('.btn__menu').click(function () {
        // $('body').hasClass('menu__open') ? $('body').removeClass('menu__open'): $('body').addClass('menu__open');
        //
        $('.header--mob').slideToggle();
        $(this).toggleClass('open');

        return false;
    });
};

exports['default'] = menuBtn;
module.exports = exports['default'];