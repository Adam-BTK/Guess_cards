import { generateDeck, shuffleDeck } from './app.js';
import { playboxElement } from './app.js';

const level1AppElement = document.querySelector('.level1');
const level2AppElement = document.querySelector('.level2');
const level3AppElement = document.querySelector('.level3');
const checkboxElement = document.getElementById('checkbox');

const displayCards = (cards, storedValue) => {
  level1AppElement.innerHTML = '';
  level2AppElement.innerHTML = '';
  level3AppElement.innerHTML = '';

  shuffleDeck(cards);

  cards.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.card = card; // Устанавливаем уникальный идентификатор карты
    cardElement.dataset.index = index;

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');

    cardFront.style.backgroundImage = `url(./img/${card})`;

    cardElement.appendChild(cardFront);

    if (storedValue === 'level 1') {
      level1AppElement.appendChild(cardElement);
    } else if (storedValue === 'level 2') {
      level2AppElement.appendChild(cardElement);
    } else {
      level3AppElement.appendChild(cardElement);
    }
  });
};

export const renderGamePage = (storedValue) => {
  checkboxElement.style.display = 'none';
  playboxElement.style.display = 'block';

  let numberOfCards;
  if (storedValue === 'level 1') {
    numberOfCards = 6;
  } else if (storedValue === 'level 2') {
    numberOfCards = 12;
  } else {
    numberOfCards = 18;
  }

  const deck = generateDeck();
  shuffleDeck(deck);
  const selectedCards = deck.slice(0, numberOfCards);

  displayCards(selectedCards, storedValue);

  // Показываем карты мастью вверх в течение 5 секунд
  setTimeout(() => {
    level1AppElement.querySelectorAll('.card').forEach((card) => {
      const cardFront = card.querySelector('.card-front');
      cardFront.style.backgroundImage = 'url(./img/рубашка.png)';
    });
    level2AppElement.querySelectorAll('.card').forEach((card) => {
      const cardFront = card.querySelector('.card-front');
      cardFront.style.backgroundImage = 'url(./img/рубашка.png)';
    });
    level3AppElement.querySelectorAll('.card').forEach((card) => {
      const cardFront = card.querySelector('.card-front');
      cardFront.style.backgroundImage = 'url(./img/рубашка.png)';
    });
  }, 5000);

  // Создадим переменные для отслеживания выбранных карт
  let firstCard = null;
  let secondCard = null;

  // Функция для обработки кликов по картам
  const handleCardClick = (card) => {
    if (firstCard !== null && secondCard !== null) {
      return; // Предотвращаем открытие более двух карт одновременно
    }

    if (firstCard === null) {
      firstCard = card;
    } else if (secondCard === null) {
      secondCard = card;

      if (firstCard.dataset.card === secondCard.dataset.card) {
        // Пара совпала
        firstCard = null;
        secondCard = null;
      } else {
        // Пара не совпала, переворачиваем карты рубашкой вверх
        setTimeout(() => {
          firstCard.querySelector('.card-front').style.backgroundImage =
            'url(./img/рубашка.png)';
          secondCard.querySelector('.card-front').style.backgroundImage =
            'url(./img/рубашка.png)';
          firstCard = null;
          secondCard = null;
        }, 1000);
      }
    }
  };

  // Добавим обработчик кликов для всех карт
  level1AppElement.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      if (
        !card.classList.contains('flipped') &&
        firstCard !== card &&
        secondCard !== card
      ) {
        card.querySelector('.card-front').style.backgroundImage = `url(./img/${
          selectedCards[card.dataset.index]
        })`;
        card.classList.add('flipped');
        handleCardClick(card);
      }
    });
  });

  level2AppElement.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      if (
        !card.classList.contains('flipped') &&
        firstCard !== card &&
        secondCard !== card
      ) {
        card.querySelector('.card-front').style.backgroundImage = `url(./img/${
          selectedCards[card.dataset.index]
        })`;
        card.classList.add('flipped');
        handleCardClick(card);
      }
    });
  });

  level3AppElement.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      if (
        !card.classList.contains('flipped') &&
        firstCard !== card &&
        secondCard !== card
      ) {
        card.querySelector('.card-front').style.backgroundImage = `url(./img/${
          selectedCards[card.dataset.index]
        })`;
        card.classList.add('flipped');
        handleCardClick(card);
      }
    });
  });
};
