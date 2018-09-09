let inputFocus = () => {
    $('label input').on({
        focus: function () {
            $(this).parent().addClass('focusIn');

            if (!$(this).hasClass('js--dropdown')) return false;

            $(this).parent().addClass('showTab');

            let listId = $(this).parent().data('list-id');

            $('.drop .box-height').hide();
            $('.drop').show();
            $('.drop .box-height[data-list-type=' + listId + ']').show();
        },
        blur: function () {
            let $self = $(this);

            $self.parent().removeClass('showTab');

            if ($self.val() == '') {
                $self.parent().removeClass('focusIn');
            }
        }
    });

};

export default inputFocus;


$(document).on('touchend mouseup', function (e) {
    let block = $('.drop'),
        block1 = $('.js--dropdown');

    if (!block.is(e.target) && block.has(e.target).length === 0 && block.is(':visible') && !block1.is(e.target) && block1.has(e.target).length === 0 ) {
        $('.drop').hide();
        $('.showTab').removeClass('showTab');
    }
});
