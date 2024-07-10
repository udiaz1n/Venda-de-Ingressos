var alerta = {
    Pista : 'Quantidade indisponível para Pista',
    Superior : 'Quantidade indisponível para Superior',
    Inferior : 'Quantidade indisponível para Inferior',
    Compra : 'Compra realizada com sucesso!',
}

function comprar() {
    var tipo = document.getElementById('tipo-ingresso');
    var qtd = parseInt(document.getElementById('qtd').value);

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    }
    if (tipo.value == 'inferior') {
        comprarInferior(qtd);
    }
    if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent); 
    
    if (qtd > qtdPista) {
        alert(alerta.Pista);
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert(alerta.Compra);
    }
}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qtdSuperior){
        alert(alerta.Superior)
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert(alerta.Compra);
    }
}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert(alerta.Inferior)
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert(alerta.Compra)
    }
}