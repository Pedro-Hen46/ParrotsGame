let qtdSelecionada = 0;
function prato(elemento){

    const pratoClicado = document.querySelector(".product");
    if (pratoClicado !== null){
        elemento.classList.toggle("selecionado");
        
    } else {
        elemento.classList.remove("selecionado");
    }
    
    const iconeClicado = document.querySelector(".icon-select");
    iconeClicado.classList.toggle("icone-ligado");
    
    qtdSelecionada += 1;
}

function botaoCompra(){
    
    if (qtdSelecionada < 3){
        alert("Voce não selecionou todos os itens para comprar, selecione as 3 opções para finalizar o pedido.");
    }
    
}