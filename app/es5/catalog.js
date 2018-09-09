'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var fancybox = require('fancybox')($);

var catalog = {
    subTable: function subTable() {
        $('.subTable__toggle').click(function () {
            $(this).next().slideToggle();
            $(this).parent().toggleClass('active');

            return false;
        });
    },
    mainTable: function mainTable() {
        $('.catalog__table--bottom .item--top').click(function () {
            $(this).next().slideToggle();
            $(this).parent().toggleClass('active');

            return false;
        });
    },
    tab: function tab() {
        $('.js--catalogTab').click(function () {
            var $that = $(this);

            if ($that.hasClass('active')) return false;

            var tabId = $that.data('tab-id');

            $that.parents('.item__tab').find('span').removeClass('active');
            $that.addClass('active');
            // $that.parents('.item--bottom').find('.subTable').removeClass('active');
            // $that.parents('.item--bottom').find('.subTable__wrap').hide();

            $that.parents('.item--bottom').find('.item__cont').removeClass('active');
            $that.parents('.item--bottom').find('.item__cont[data-tab-content=' + tabId + ']').addClass('active');
        });
    },
    fancy: function fancy() {
        $('.fancybox').fancybox();
    },
    init: function init() {
        this.subTable();
        this.mainTable();
        this.tab();
        this.fancy();
    }
};
exports['default'] = catalog;
module.exports = exports['default'];