//Algumas variaveis globais.
let contadorJogadas = 0;
let verificaSeGanhou = 0;

//- Iniciando o game perguntando quantidade de cartas e verificando se é par.
let qtdCartas = prompt("Quer jogar com quantas cartas? (de 4 a 14)");

if (qtdCartas % 2 == 0 && qtdCartas >= 4 && qtdCartas <= 14){
    console.log("Iniciando o game, meu bom...");
} else {
    alert(`Voce não escolheu um numero par dentro do intervalo, por favor tente novamente. Agora com um numero PAR entre o intervalo informado | 4 a 14 |.`);
    location.reload();
} 
// - Final dos prompts (Captação de informacoes do jogador)...

document.querySelector(".qtd-cartas").innerText = `VOCÊ ESTA JOGANDO COM ${qtdCartas} CARTAS.`;

const cardBoard = document.querySelector(".cardboard");

let imagesCards = [
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "fiestaparrot.gif",
    "metalparrot.gif",
    "revertitparrot.gif",
    "tripletsparrot.gif",
    "unicornparrot.gif",
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "fiestaparrot.gif",
    "metalparrot.gif",
    "revertitparrot.gif",
    "tripletsparrot.gif",
    "unicornparrot.gif",
    
]; //- Meu vetor de imagens do game.

//comparador(); //-Muda a posicao inicial do deck

imprimirCartas(); //- Faz o deck aparecer na mesa.


//-----------------------------------
//- INICIO DAS FUNCOES DO PROGRAMA.
//-----------------------------------

function controleGame(){

    //- verificar se acabou o jogo.
    if( verificaSeGanhou == qtdCartas/2){
        const decisao = prompt(`
        🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩✅
             🎉🎊    MEUS PARABENS VOCE GANHOU!    🎉🎊 
        🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩✅

        TOTAL DE MOVIMENTOS (CARTAS) : ${contadorJogadas} ✅ VEZES 
                    
        DESEJA JOGAR NOVAMENTE? [SIM - NÃO]`);
  
      if(decisao == 'sim' || decisao == 'SIM'){
        alert(`🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩        ✅

        INICIANDO NOVO JOGO | BOA SORTE 🌚`);
        location.reload();
      } 
      
    }
}

function comparador() { 
  const ShortCards = imagesCards;
  ShortCards.sort(() => Math.random() - 0.5);
}

function imprimirCartas(){

    const carta = [1,1,2,2,3,3,4,4,5,5,6,6,7,7];
  
    for(let y =0; y < qtdCartas; y++){
        let p = Math.trunc(Math.random () * qtdCartas);
        let aux = carta[p];
        carta[p] = carta[y];
        carta[y] = aux;
    
    }

    for(let y =0; y < qtdCartas; y++){
        if (carta[y] === carta [y+1]){
            // Check lado a lado.
            let aux = carta[y + 1];
            carta[y] = carta[0];
            carta[0] = aux;
        }
    
    }
    for(let i = 0; i < qtdCartas; i++){
        document.querySelector(".baralho").innerHTML += `
        <div class="memory-card" data-card="${imagesCards[carta[i]]}">
            
              <img class="front-face" src="front.png" width="97px" height="106px">      
           
            
              <img class="back-face" src="${imagesCards[carta[i]]}" width="80px" height="100px">          
            
        </div>`; 
   }
} //- final function Imprimir as Cartas...

function checkaIgualdade() {

  let deuMatch = firstCard.dataset.card === secondCard.dataset.card;

  if(!deuMatch){
    voltaAoOriginal()
  }else{
    resetCards(deuMatch);
    verificaSeGanhou += 1; // Variavel de controle (ganhador);
    controleGame();
  }   

}

const cards = document.querySelectorAll(".memory-card");
let firstCard, secondCard, carton, cartonTwo;
let lockCards = false;

function viraAcarta() {

 
  if (lockCards) return false;
  this.classList.add("flip");

  //- Variavel para contar a quantidade de jogadas.
  contadorJogadas += 1;

  if (!firstCard) {
    firstCard = this;
    carton = firstCard;
    carton = firstCard.querySelector(".back-face");
    carton.classList.add("opaco-off");
    return false;
  }

  secondCard = this;
  cartonTwo = secondCard;

  cartonTwo = cartonTwo.querySelector(".back-face");
  cartonTwo.classList.add("opaco-off");
  checkaIgualdade();
}

function voltaAoOriginal() {
  lockCards = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    carton.classList.remove("opaco-off");
    cartonTwo.classList.remove("opaco-off");
    console.log(carton);
    resetCards();
  }, 1000);
}

function resetCards(deuMatch = false) {
  if (deuMatch) {
    firstCard.removeEventListener("click", viraAcarta);
    secondCard.removeEventListener("click", viraAcarta);
  }

  [firstCard, secondCard, lockCards] = [null, null, false];
}

cards.forEach(card => card.addEventListener("click", viraAcarta));


