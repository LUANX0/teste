$(document).ready(function(){
    $('#data').mask('00/00/0000');
    $('#cpf').mask('000.000.000-00', {reverse: true});
})

function validacao() {
    var senha = document.form.senha.value;
    var validarSenha = document.form.validarSenha.value;
    if(document.form.cpf.value=="" || document.form.cpf.value.length <14) {
        $.notify({
            message: 'Digite um cpf válido.'
        },{
            type: 'danger'
        });
        document.form.cpf.focus();
       return false;
    }
    if(document.form.nome.value=="") {
        $.notify({
            message: 'Digite um nome.'
        },{
            type: 'danger'
        });
        document.form.nome.focus();
       return false;
    }
    if(document.form.email.value=="" || document.form.email.value.indexOf('@')==-1 || document.form.email.value.indexOf('.')==-1) {
        $.notify({
            message: 'Digite um e-mail existente.'
        },{
            type: 'danger'
        });
        document.form.email.focus();
       return false;
    }
    if(document.form.data.value=="" || document.form.data.value.length <10) {
        $.notify({
            message: 'Digite uma data existente.'
        },{
            type: 'danger'
        });
        document.form.data.focus();
       return false;
    }
    if (document.form.senha.value.length < 6) {
        $.notify({
            message: 'A senha deve ter no minimo 6 caracteres.'
        },{
            type: 'danger'
        });
    document.form.senha.focus();
    return false;
    }
    if (senha != validarSenha) {
        $.notify({
            message: 'As senhas devem ser iguais.'
        },{
            type: 'danger'
        });
    document.form.validarSenha.focus
    return false;
    }
    $.notify({
        message: 'Cadastro realizado com successo.'
    },{
        type: 'success'
    });
    return false;
}
