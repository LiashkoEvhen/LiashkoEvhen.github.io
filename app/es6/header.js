let header = {
    filter() {
        $('.filter__control a').click(function (e) {
            e.preventDefault();

            if ($(this).hasClass('active')) return false;

            let id = $(this).data('id');

            $('.filter__control').attr('data-position', id);

            $('.filter__item').removeClass('active');
            $('.filter__item[data-form=' + id + ']').addClass('active');

            $('.filter__control a').removeClass('active');
            $(this).addClass('active');
        });
    },

    filterToggle() {
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

    lang() {
        $('.lang__title').click(function () {
            $(this).parent().parent().toggleClass('open');

            return false;
        });
    },

    production(){
        $('.js--production').click(function (e) {
            if($(window).width() > 991) {
                e.preventDefault();

                $(this).toggleClass('active');
                $('body').toggleClass('js__production__view');
                // $('.header__production').slideToggle(300);

                return false;
            }
        });
    },

    checkbox: function () {
        // $('.selections .checkbox-icon ')
    },

    init: function () {
        this.filter();
        this.checkbox();
        this.filterToggle();
        this.production();
        this.lang();
    }
};
export default header;