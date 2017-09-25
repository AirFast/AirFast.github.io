$(function () {

    $('#leyout').on('click', function (e) {
        e.stopPropagation();
        $('#pop-up-timer').removeClass('hidden');
    })

    $('#skip-timer').on('click', function (e) {
        e.stopPropagation();
        $('#pop-up-timer').addClass('hidden');
    })

    $('input[value=""]').addClass('empty');
    $('input').keyup(function(){
        if( $(this).val() == ""){
            $(this).addClass("empty");
        }else{
            $(this).removeClass("empty");
        }
    });
});