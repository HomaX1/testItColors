$(function () {
    'use strict';
    const ALLCONST = {
        input: $('.user__input-text'),
        titleInput: $('.user__title'),
        titleSelect: $('.select-wrap__title'),
        select: $('.select'),
        selectItem: $('.select__item'),
        leftDirection: $('.direction-left__text'),
        rightDirection: $('.direction-right__text'),
        step: $('.step'),
        direction: $('#direction'),
        tabsItem: $('.tabs-item'),
    };


    let inputActive = function () {
        ALLCONST.titleInput.hide();
        $(this).siblings('.user__title').fadeIn();
    };


    let eventRightDirection = () => {
        let activeBlock;

        ALLCONST.step.each((i, item) => {
            if($(item).hasClass('step-active')) {
                activeBlock = $(item);
                activeBlock.numbIndex = activeBlock.index();
            }
        });

        if(activeBlock.next('.step').length) {
            activeBlock.removeClass('step-active');
            activeBlock.next('.step').addClass('step-active');
            ALLCONST.direction.addClass('active');
        }

        for (let j = 1; j < ALLCONST.tabsItem.length; j++) {
            if(j === activeBlock.numbIndex) {
                $(ALLCONST.tabsItem).removeClass('tabs-item_active');
                $(ALLCONST.tabsItem[j]).addClass('tabs-item_active');
            }
        }
    };


    let eventLeftDirection = () => {
        let activeBlock;

        ALLCONST.step.each((i, item) => {
            if($(item).hasClass('step-active')) {
                activeBlock = $(item);
                activeBlock.numbIndex = i;
            }
        });

        console.log(activeBlock.prev('.step'));
        if(activeBlock.prev('.step').length) {
            activeBlock.removeClass('step-active');
            activeBlock.prev('.step').addClass('step-active');
            for (let j = 1; j < ALLCONST.tabsItem.length; j++) {
                if(j === activeBlock.numbIndex) {
                    $(ALLCONST.tabsItem).removeClass('tabs-item_active');
                    $(ALLCONST.tabsItem[j-1]).addClass('tabs-item_active');
                }
            }
        } else {
            ALLCONST.direction.removeClass('active');
        }
    };


    let showOptions = function () {
        $(this).siblings('.select').fadeIn();
    };

    let chooseOption = function () {
        ALLCONST.select.fadeOut();
        $(this).parent('.select').siblings('.select-wrap__title').text($(this).text());
    };


    $('form').validate();
    ALLCONST.input.click(inputActive);
    ALLCONST.leftDirection.click(eventLeftDirection);
    ALLCONST.rightDirection.click(eventRightDirection);
    ALLCONST.titleSelect.click(showOptions);
    ALLCONST.selectItem.click(chooseOption);
});