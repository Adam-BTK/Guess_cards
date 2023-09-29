import { generateDeck, shuffleDeck } from './app.js';
import { playboxElement } from './app.js';

const level1AppElement = document.querySelector('.level1');
const level2AppElement = document.querySelector('.level2');
const level3AppElement = document.querySelector('.level3');
const checkboxElement = document.getElementById('checkbox');
// let selectedCard = null;

const showCardFront = (cardElement) => {
  cardElement.querySelector('.card-front').classList.add('visible');
  cardElement.querySelector('.card-back').classList.remove('visible');
};

const hideCardFront = (cardElement) => {
  cardElement.querySelector('.card-front').classList.remove('visible');
  cardElement.querySelector('.card-back').classList.add('visible');
};

const displayCards = (cards, storedValue) => {
  level1AppElement.innerHTML = '';
  level2AppElement.innerHTML = '';
  level3AppElement.innerHTML = '';

  const restartBtnElement = document.createElement('div');
  restartBtnElement.classList.add('timer_btn_box');

  cards.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.index = index;

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');

    cardElement.appendChild(cardFront);
    cardElement.appendChild(cardBack);

    cardFront.style.backgroundImage = `url(./img/card${index + 1}.png)`;
    cardBack.style.backgroundImage = `url(./img/рубашка.png)`;

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

  setTimeout(() => {
    level1AppElement.querySelectorAll('.card').forEach(hideCardFront);
    level2AppElement.querySelectorAll('.card').forEach(hideCardFront);
    level3AppElement.querySelectorAll('.card').forEach(hideCardFront);

    level1AppElement.querySelectorAll('.card').forEach((card) => {
      card.addEventListener('click', () => showCardFront(card));
    });

    level2AppElement.querySelectorAll('.card').forEach((card) => {
      card.addEventListener('click', () => showCardFront(card));
    });

    level3AppElement.querySelectorAll('.card').forEach((card) => {
      card.addEventListener('click', () => showCardFront(card));
    });
  }, 5000);
};
