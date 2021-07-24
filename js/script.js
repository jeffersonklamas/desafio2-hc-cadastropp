// Desenvolver habilidades em JavaScript

function cadastraCliente(){
    let campo1 = document.getElementById("campo1");
    let campo2 = document.getElementById("campo2");
    let campo3 = document.getElementById("campo3");
    let campo4 = document.getElementById("campo4");

    let dados = JSON.parse(localStorage.getItem("dadosCliente"));

    if(dados == null){
        localStorage.setItem("dadosCliente", "[]");
        dados = [];
    }

    let auxRegistro = {
        nome: campo1.value,
        email: campo2.value,
        telefone: campo3.value,
        endereço: campo4.value
    }

    dados.push(auxRegistro);

    localStorage.setItem("dadosCliente", JSON.stringify(dados));
    alert("Registro incluído com sucesso!");

    campo1.value = "";
    campo2.value = "";
    campo3.value = "";
    campo4.value = "";
}

function cadastraProduto(){
    let campo5 = document.getElementById("campo5");
    let campo6 = document.getElementById("campo6");
    let campo7 = document.getElementById("campo7");
    let campo8 = document.getElementById("campo8");

    let dados = JSON.parse(localStorage.getItem("dadosProduto"));

    if(dados == null){
        localStorage.setItem("dadosProduto", "[]");
        dados = [];
    }

    let auxRegistro = {
        codigo_do_produto: campo5.value,
        nome_do_produto: campo6.value,
        marca: campo7.value,
        quantidade: campo8.value,
    }

    dados.push(auxRegistro);

    localStorage.setItem("dadosProduto", JSON.stringify(dados));
    alert("Registro incluído com sucesso!");

    campo5.value = "";
    campo6.value = "";
    campo7.value = "";
    campo8.value = "";
}