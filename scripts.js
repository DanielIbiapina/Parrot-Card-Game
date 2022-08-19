promptInicial();

function promptInicial(){
    const quantasCartas = prompt('Com quantas cartas deseja jogar?');
    if(quantasCartas !== '4' && quantasCartas !== '6' && quantasCartas !== '8' && quantasCartas !== '10' 
    && quantasCartas !== '12' && quantasCartas !== '14' ){
        promptInicial();
        quantasCartas = 0;
    }
    const ul = document.querySelector("ul");

    for (let indice = 0; indice < Number(quantasCartas); indice++) {
        ul.innerHTML += `
          <li><div class="carta"></div></li>
        `;
      }
} 


  


