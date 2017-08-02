$(function () {
    'use strict';

    const ALLCONST = {
        inputWrap: $('.user'),
        input: $('.user__input-text'),
        titleInput: $('.user__title'),
        select: $('.type-wrap__title'),
        insideOption: $('.type')
    };

    let inputActive = function () {
        ALLCONST.titleInput.hide();
        /*ALLCONST.input.attr('placeholder').show();*/
        $(this).siblings('.user__title').fadeIn();
        /*$(this).attr('placeholder', '');*/
    };

    ALLCONST.input.click(inputActive);

});