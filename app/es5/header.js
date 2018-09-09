'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var header = {
    filter: function filter() {
        $('.filter__control a').click(function (e) {
            e.preventDefault();

            if ($(this).hasClass('active')) return false;

            var id = $(this).data('id');

            $('.filter__control').attr('data-position', id);

            $('.filter__item').removeClass('active');
            $('.filter__item[data-form=' + id + ']').addClass('active');

            $('.filter__control a').removeClass('active');
            $(this).addClass('active');
        });
    },

    filterToggle: function filterToggle() {
        $('.filter__form--aria .toggle').click(function () {
            $('.filter__form--bottom').toggleClass('open');

            if ($('.filter__form--bottom').hasClass('open')) {
                $(this).find('span').text('Простой поиск');
            } else {
                $(this).find('span').text('Расширенный поиск');
            }
            return false;
        });
    },

    lang: function lang() {
        $('.lang__title').click(function () {
            $(this).parent().parent().toggleClass('open');

            return false;
        });
    },

    production: function production() {
        $('.js--production').click(function (e) {
            if ($(window).width() > 991) {
                e.preventDefault();

                $(this).toggleClass('active');
                $('body').toggleClass('js__production__view');
                // $('.header__production').slideToggle(300);

                return false;
            }
        });
    },

    checkbox: function checkbox() {
        // $('.selections .checkbox-icon ')
    },

    init: function init() {
        this.filter();
        this.checkbox();
        this.filterToggle();
        this.production();
        this.lang();
    }
};
exports['default'] = header;
module.exports = exports['default'];