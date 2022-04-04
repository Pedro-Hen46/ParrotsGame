let contador = 0;

function prato(elemento){

    const pratoSelecionado = document.querySelector(".selecionado");   
    
    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("selecionado"); 
        elemento.classList.add("selecionado"); 
    } else {
        elemento.classList.add("selecionado");
        contador++;
    }
   botaoCompra();
}


function bebida(elemento){

    const bebidaSelecionada = document.querySelector(".selecionado-bebida"); //Procurando elemento selecionado
     
    if (bebidaSelecionada !== null) {
        bebidaSelecionada.classList.remove("selecionado-bebida"); 
        elemento.classList.add("selecionado-bebida"); 
    } else {
        elemento.classList.add("selecionado-bebida");
        contador++;
    }
   botaoCompra();
    

}
function sobremesa(elemento){
    
    const sobremesaSelecionada = document.querySelector(".selecionado-sobremesa"); //Procurando elemento selecionado
    
    if (sobremesaSelecionada !== null) {
        sobremesaSelecionada.classList.remove("selecionado-sobremesa"); 
        elemento.classList.add("selecionado-sobremesa"); 
    } else {
        elemento.classList.add("selecionado-sobremesa");
        contador++;
    }
   botaoCompra();

}

function botaoCompra(){
    

    if(contador === 3){
        const confirmacao = document.querySelector(".button-buy");
        confirmacao.classList.add("button-buy-ok"); 
        document.getElementById("botao").innerHTML="Fechar pedido";

    }
}