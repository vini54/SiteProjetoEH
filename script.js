$(document).ready(function(){
    $('#loginAluno').submit(function( evento ){
        let usuario = $('#inputUsuario').val()
        let senha = $('#inputSenha').val()

        if (usuario == 'admin' && senha == '1234') {
            $('#mensagem').addClasses('alert alert-success alert-dismissible fade show')
            $('#mensagem').removeClasses('alert-warning')
            $('#mensagem').text('Usuário Logado').show().fadeOut(3000)
        } else {
            $('#mensagem').addClasses('alert alert-warning alert-dismissible fade show')
            $('#mensagem').removeClasses('alert-success')
            $('#mensagem').text('Usuário ou senha inválida!!').show().fadeOut(3000)
            evento.preventDefault() // bloqueia o evento submit
        }
    })
})