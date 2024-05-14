$(document).ready(function() {
    $('#formulario').submit(function(event) {
        
        event.preventDefault();

        //variables
        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();

        //validaciones
        var errors = [];

        if (name.trim() === '') {
            errors.push('Por favor, introduce tu nombre.');
        }

        if (email.trim().length < 3) {
            errors.push('El correo electrónico debe tener al menos 3 caracteres.');
        }

        if (password.trim().length < 10) {
            errors.push('La contraseña debe tener al menos 10 caracteres.');
        }

        //error y enviar
        if (errors.length > 0) {
            var errorMessage = errors.join('<br>');
            $('#error-message').html(errorMessage);
        } else {
            
            $('#formulario')[0].submit();
        }
    });
});
