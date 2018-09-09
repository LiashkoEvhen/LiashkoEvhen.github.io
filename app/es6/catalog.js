let fancybox = require('fancybox')($);

let catalog = {
    subTable()  {
        $('.subTable__toggle').click(function () {
            $(this).next().slideToggle();
            $(this).parent().toggleClass('active');

            return false;
        });
    },
    mainTable(){
        $('.catalog__table--bottom .item--top').click(function () {
            $(this).next().slideToggle();
            $(this).parent().toggleClass('active');

            return false;
        });
    },
    tab(){
        $('.js--catalogTab').click(function () {
            let $that = $(this);

            if ($that.hasClass('active')) return false;

            let tabId = $that.data('tab-id');

            $that.parents('.item__tab').find('span').removeClass('active');
            $that.addClass('active');
            // $that.parents('.item--bottom').find('.subTable').removeClass('active');
            // $that.parents('.item--bottom').find('.subTable__wrap').hide();

            $that.parents('.item--bottom').find('.item__cont').removeClass('active');
            $that.parents('.item--bottom').find('.item__cont[data-tab-content=' + tabId + ']').addClass('active');
        });
    },
    fancy(){
        $('.fancybox').fancybox();
    },
    init() {
        this.subTable();
        this.mainTable();
        this.tab();
        this.fancy();
    }
};
export default catalog;