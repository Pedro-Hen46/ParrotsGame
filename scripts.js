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
function cancelaPedido(){
    let decisao;
    
    decisao = confirm("Tem certeza que deseja cancelar o seu pedido ? ");
    if (decisao == true){
        const cancelaPedido = document.querySelector(".fechar-pedido");
        cancelaPedido.classList.add("desaparecer"); 
        alert ("Seu carrinho esta sendo esvaziado...");
        location.reload();
    } 
}
function botaoCompra(elemento){

    if(contador === 3){
        const confirmacao = document.querySelector(".button-buy");
        confirmacao.classList.add("button-buy-ok"); 
        document.getElementById("botao").innerHTML="Fechar pedido";

        if (elemento == 99){ //Verificando se o elemento botao foi clicado.
            let prato, bebida, sobreme;
            const finalizarCompra = document.querySelector(".fechar-pedido");
            finalizarCompra.classList.add("aparecer"); 

            prato = document.querySelector(".selecionado h5").innerHTML;
            bebida = document.querySelector(".selecionado-bebida h5").innerHTML;
            sobreme = document.querySelector(".selecionado-sobremesa h5").innerHTML;

            const pratoDescrito = document.getElementById("d1").innerHTML = prato;
            const valorPrato = document.getElementById("p1").innerHTML= ("R$") + document.querySelector(".selecionado span").innerHTML;
            const bebidaDescrito = document.getElementById("d2").innerHTML = bebida;
            const valorBebida = document.getElementById("p2").innerHTML= ("R$") + document.querySelector(".selecionado-bebida span").innerHTML;
            const sobremesaDescrito = document.getElementById("d3").innerHTML = sobreme;
            const valorSobremesa = document.getElementById("p3").innerHTML= ("R$") + document.querySelector(".selecionado-sobremesa span").innerHTML;
            
            valorTotal = Number.parseFloat(precoPrato) + Number.parseFloat(precoBebida) + Number.parseFloat(precoSobremesa)
            const total = document.getElementById("p4").innerHTML = ("R$ ") + valorTotal.toFixed(2);
            console.log(prato, bebida, sobreme);
    
        }
        } else if (contador == 0){
        alert("Por gentileza selecione 3 itens para prosseguir com sua compra...");
    } 

}

function finalizarPedido(){

    const nome = document.getElementById("nomeId").value;
    const endereco = document.getElementById("enderecoId").value;
    

}