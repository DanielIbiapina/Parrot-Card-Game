promptInicial();


let firstCard = '';
let secondCard = '';

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
    
    cards.length = Number(quantasCartas);
    console.log(cards);
    const cardsEmbaralhadas = cards.sort(comparador);
    //ideia para amanha: duplicar o ul.innerHTML
    
    

    for (let indice = 0; indice < Number(quantasCartas); indice++) {
       
        ul.innerHTML += `<li>
        <div class="carta ${cardsEmbaralhadas[indice]}" >
        <div class = "face frente"> <img src ="${cardsEmbaralhadas[indice]}.gif"/></div>
        <div class = "face costas" onclick="revealCard(this)" setAt></div>
        </div>
        </li>`;

        
      }
       
     
      
     
     
      

        
    
      function comparador() { 
          return Math.random() - 0.5; 
      }
      
} 

function revealCard(elemento){
   
   if(elemento.className.includes('reveal-card')){
    return;
   }
    if(firstCard == ''){
        
        elemento.classList.add('reveal-card');
        firstCard = elemento.parentNode;
        firstCardFilho = elemento;
    } else if(secondCard == ''){
        elemento.classList.add('reveal-card');
        secondCard = elemento.parentNode;
        secondCardFilho = elemento;
    }
    
    if(firstCard.classList[1] == secondCard.classList[1]){
        
        firstCard = '';
        secondCard = '';

    } else{
        setTimeout(intervalo,1000);
        function intervalo(){
            firstCardFilho.classList.remove('reveal-card');
            secondCardFilho.classList.remove('reveal-card');
            
            firstCard = '';
            secondCard = '';
       }
           
            
        
    }
    console.log(firstCard.classList[1]);
    console.log(secondCard.classList[1]);
    
  }







  


