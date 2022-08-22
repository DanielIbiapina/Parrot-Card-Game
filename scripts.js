promptInicial();




function promptInicial(){
    const quantasCartas = prompt('Com quantas cartas deseja jogar?');
    if(quantasCartas !== '4' && quantasCartas !== '6' && quantasCartas !== '8' && quantasCartas !== '10' 
    && quantasCartas !== '12' && quantasCartas !== '14' ){
        promptInicial();
        quantasCartas = 0;
    }
    const ul = document.querySelector("ul");
    const cards = [
        'bobrossparrot',
        'bobrossparrot',
        'explodyparrot',
        'explodyparrot',
        'fiestaparrot',
        'fiestaparrot',
        'metalparrot',
        'metalparrot',
        'revertitparrot',
        'revertitparrot',
        'tripletsparrot',
        'tripletsparrot',
        'unicornparrot',
        'unicornparrot'
        
    ]
    const cardsEmbaralhadas = cards.sort(comparador);
    function comparador() { 
        return Math.random() - 0.5; 
    }
   
    //ideia para amanha: duplicar o ul.innerHTML
        

    for (let indice = 0; indice < Number(quantasCartas); indice++) {
        ul.innerHTML += `<li>
        <div class="carta abd" onclick ="virarCarta(this)">
        <div class = "face frente"> <img src ="${cardsEmbaralhadas[indice]}.gif"/></div>
        <div class = "face costas"></div>
        </div>
        </li>`;
      }
} 








  


