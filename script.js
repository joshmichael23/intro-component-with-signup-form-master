$(document).ready(function(){

    $("form").submit(function(e){
        e.preventDefault();
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var email = $("#email").val();
        var password = $("#password").val();

        if(firstName==""){
            $("#firstName").css('border-color', 'var(--color-red)').css('background-image', "var(--erroricon)");
            $('label[for=firstName]').fadeIn();
        }else{
            $("#firstName").css('border-color', '').css('background-image', 'none');
            $('label[for=firstName]').fadeOut();
        }

        if(lastName==""){
            $("#lastName").css('border-color', 'var(--color-red)').css('background-image', "var(--erroricon)");
            $('label[for=lastName]').fadeIn();
        }else{
            $("#lastName").css('border-color', '').css('background-image', 'none');
            $('label[for=lastName]').fadeOut();
        }

        if(email==""){
            $("#email").css('border-color', 'var(--color-red)').css('background-image', "var(--erroricon)");
            $('label[for=email]').fadeIn();
        }else{
            $("#email").css('border-color', '').css('background-image', 'none');
            $('label[for=email]').fadeOut();
        }

        if(password==""){
            $("#password").css('border-color', 'var(--color-red)').css('background-image', "var(--erroricon)");
            $('label[for=password]').fadeIn();
        }else{
            $("#password").css('border-color', '').css('background-image', 'none');
            $('label[for=password]').fadeOut();
        }



    });


});