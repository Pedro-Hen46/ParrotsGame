let contador = 0;
let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;

let valorTotal = 0;

function prato(elemento){

    const pratoSelecionado = document.querySelector(".selecionado");   
    
    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("selecionado"); 
        elemento.classList.add("selecionado"); 
    } else {
        elemento.classList.add("selecionado");
        contador++;
    }
    precoPrato = document.querySelector(".selecionado span").innerHTML.replace(",",".");

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
    precoBebida = document.querySelector(".selecionado-bebida span").innerHTML.replace(",",".")
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
    precoSobremesa = document.querySelector(".selecionado-sobremesa span").innerHTML.replace(",",".")
   botaoCompra();

}

function botaoCompra(){

    if(contador === 3){
        const confirmacao = document.querySelector(".button-buy");
        confirmacao.classList.add("button-buy-ok"); 
        document.getElementById("botao").innerHTML="Fechar pedido";

        const finalizarCompra = document.querySelector(".fechar-pedido");
        finalizarCompra.classList.add("aparecer"); 

        valorTotal = Number.parseFloat(precoPrato) + Number.parseFloat(precoBebida) + Number.parseFloat(precoSobremesa)
        console.log(valorTotal);
    } else if (contador == 0){
        alert("Por gentileza selecione 3 itens para prosseguir com sua compra...");
    } 
}