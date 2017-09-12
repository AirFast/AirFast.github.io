$(function () {

    $('#leyout').on('click', function (e) {
        e.stopPropagation();
        $('#pop-up-timer').removeClass('hidden');
    })

    $('#skip-timer').on('click', function (e) {
        e.stopPropagation();
        $('#pop-up-timer').addClass('hidden');
    })

});