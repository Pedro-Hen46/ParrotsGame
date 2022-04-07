
//- Iniciando o game perguntando quantidade de cartas e verificando se é par.
let qtdCartas = prompt("Quer jogar com quantas cartas? (de 4 a 14)");

if (qtdCartas % 2 == 0 && qtdCartas >= 4 && qtdCartas <= 14){
    alert(`Ok, você escolheu um total de ${qtdCartas} para jogar.`);
} else {
        alert(`Voce não escolheu um numero par dentro do intervalo, por favor tente novamente. Agora com um numero PAR entre o intervalo informado | 4 a 14 |.`);
        location.reload();
} 

document.querySelector(".qtd-cartas").innerText = `TOTAL DE CARTAS SELECIONADAS -> ${qtdCartas} CARTAS.`;

const carta = document.querySelectorAll(".baralho");
for(let i = 0; i < qtdCartas; i++){
    document.querySelector(".baralho").innerHTML += `
    <div class="cartas">
                <img class="mouse-link" src="/Projeto_04_parrotsCardGame/images/front.png" width="97px" height="106px">
    </div>`;
    console.log(i);
}