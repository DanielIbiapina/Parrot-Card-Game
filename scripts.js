// Variáveis de estado
let firstCard = null;
let secondCard = null;
let matchedCards = 0;
let totalCards = getNumberOfCards();

// Inicia o jogo
startGame();

// Função para solicitar o número de cartas do jogador
function getNumberOfCards() {
  let numberOfCards;
  do {
    numberOfCards = prompt(
      "Com quantas cartas deseja jogar? Escolha entre 4, 6, 8, 10, 12 ou 14."
    );
  } while (![4, 6, 8, 10, 12, 14].includes(Number(numberOfCards)));
  return Number(numberOfCards);
}

// Função para iniciar o jogo, renderizando as cartas
function startGame() {
  const cardImages = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot",
  ];

  // Duplicar e embaralhar as cartas de acordo com o número escolhido
  const gameCards = shuffleArray([
    ...cardImages.slice(0, totalCards / 2),
    ...cardImages.slice(0, totalCards / 2),
  ]);

  renderCards(gameCards);
}

// Função para embaralhar as cartas
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Função para renderizar as cartas no HTML
function renderCards(cards) {
  const ul = document.querySelector("ul");
  ul.innerHTML = ""; // Limpa o conteúdo anterior
  cards.forEach((card) => {
    ul.innerHTML += `
      <li>
        <div class="carta" data-card="${card}" onclick="handleCardClick(this)">
          <div class="face frente"><img src="./images/${card}.gif" alt="${card}"></div>
          <div class="face costas"></div>
        </div>
      </li>`;
  });
}

// Função que lida com o clique na carta
function handleCardClick(cardElement) {
  if (cardElement.classList.contains("reveal-card") || secondCard) {
    return;
  }

  cardElement.classList.add("reveal-card");

  if (!firstCard) {
    firstCard = cardElement;
  } else {
    secondCard = cardElement;
    checkForMatch();
  }
}

// Função que verifica se as cartas viradas são iguais
function checkForMatch() {
  const firstCardImage = firstCard.getAttribute("data-card");
  const secondCardImage = secondCard.getAttribute("data-card");

  if (firstCardImage === secondCardImage) {
    resetCards(true);
    matchedCards += 2;
    checkForWin();
  } else {
    setTimeout(() => resetCards(false), 1000);
  }
}

// Função que reseta as cartas
function resetCards(isMatch) {
  if (!isMatch) {
    firstCard.classList.remove("reveal-card");
    secondCard.classList.remove("reveal-card");
  }
  firstCard = null;
  secondCard = null;
}

// Função para verificar se o jogador venceu o jogo
function checkForWin() {
  if (matchedCards === totalCards) {
    setTimeout(() => alert("Parabéns! Você completou o jogo!"), 500);
  }
}
