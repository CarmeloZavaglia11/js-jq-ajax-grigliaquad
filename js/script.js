$(document).ready(function(){

    for (var i = 0; i < 36; i++) {
        $('.wrapper').append('<div class="square"></div>');
    }

    $('.square').on('click', function(){

        var quadrato = $(this);

        if (quadrato.hasClass('selected')) {
            alert('Quadrato già selezionato!');
            return;
        }

        quadrato.addClass('selected');

        $.ajax(
            {
                url: "https://flynn.boolean.careers/exercises/api/random/int",
                method: "GET",
                success: function (data) {
                    quadrato.text(data.response);
                    if (data.response <= 5) {
                        quadrato.addClass('yellow');
                    }  else {
                        quadrato.addClass('green')
                    }
                },
                error: function (errori) {
                    alert("ERRORE!: " + errori);
                }
            }
            ); 
    });

    $('button').click(function(){

        location.reload();
        
    });


});