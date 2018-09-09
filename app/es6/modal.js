let key = require('./keydown');

let modal = {
    open: (btnToOpen, container)=> {
        $(btnToOpen).click(function (e) {
            e.preventDefault();

            $(container).addClass('openModal');
        });
    },
    close: (container)=> {
        key.escape('openModal', true);

        $(document).on('mouseup touchstart', function (e) {
            let block = $('.no-touch ' + container);

            if (!block.is(e.target) && block.has(e.target).length === 0 && block.parent().hasClass('openModal')) {
                $('.openModal').removeClass('openModal');
            }
        });
    },
    onlyBtnClose:(el)=>{
        $('body').delegate(el, 'click', function (e) {
            e.preventDefault();
            $('.openModal').removeClass('openModal');
        });
    }
};

export default modal;