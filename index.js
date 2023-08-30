
let botao = document.getElementById("botao")
let mensagem = document.getElementById("mensagem")


botao.addEventListener("click", function () {

    let idadeUsuario = Number(document.getElementById("idadeUsuario").value)
    let idadePais = Number(document.getElementById("idadePais").value)

    if (idadePais > idadeUsuario)
    mensagem.innerHTML = "Você não pode entrar!"

    else if (idadePais <= idadeUsuario)
    mensagem.innerHTML = "Seja bem-vindo"

})

