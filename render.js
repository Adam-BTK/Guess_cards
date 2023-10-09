import { generateDeck, shuffleDeck } from './app.js';
import { playboxElement } from './app.js';

const level1AppElement = document.querySelector('.level1');
const level2AppElement = document.querySelector('.level2');
const level3AppElement = document.querySelector('.level3');
const checkboxElement = document.getElementById('checkbox');

const cardData = [
  { rank: '6', suit: 'пики', image: '6 пики.png' },
  { rank: '7', suit: 'пики', image: '7 пики.png' },
  { rank: '8', suit: 'пики', image: '8 пики.png' },
  { rank: '9', suit: 'пики', image: '9 пики.png' },
  { rank: '10', suit: 'пики', image: '10 пики.png' },
  { rank: 'Валет', suit: 'пики', image: 'Валет пики.png' },
  { rank: 'Дама', suit: 'пики', image: 'Дама пики.png' },
  { rank: 'Король', suit: 'пики', image: 'Король пики.png' },
  { rank: 'Туз', suit: 'пики', image: 'Туз пики.png' },
  // Черви

  { rank: '6', suit: 'черви', image: '6 черви.png' },
  { rank: '7', suit: 'черви', image: '7 черви.png' },
  { rank: '8', suit: 'черви', image: '8 черви.png' },
  { rank: '9', suit: 'черви', image: '9 черви.png' },
  { rank: '10', suit: 'черви', image: '10 черви.png' },
  { rank: 'Валет', suit: 'черви', image: 'Валет черви.png' },
  { rank: 'Дама', suit: 'черви', image: 'Дама черви.png' },
  { rank: 'Король', suit: 'черви', image: 'Король черви.png' },
  { rank: 'Туз', suit: 'черви', image: 'Туз черви.png' },
  // Бубны

  { rank: '6', suit: 'бубны', image: '6 бубны.png' },
  { rank: '7', suit: 'бубны', image: '7 бубны.png' },
  { rank: '8', suit: 'бубны', image: '8 бубны.png' },
  { rank: '9', suit: 'бубны', image: '9 бубны.png' },
  { rank: '10', suit: 'бубны', image: '10 бубны.png' },
  { rank: 'Валет', suit: 'бубны', image: 'Валет бубны.png' },
  { rank: 'Дама', suit: 'бубны', image: 'Дама бубны.png' },
  { rank: 'Король', suit: 'бубны', image: 'Король бубны.png' },
  { rank: 'Туз', suit: 'бубны', image: 'Туз бубны.png' },
  // Крести

  { rank: '6', suit: 'крести', image: '6 крести.png' },
  { rank: '7', suit: 'крести', image: '7 крести.png' },
  { rank: '8', suit: 'крести', image: '8 крести.png' },
  { rank: '9', suit: 'крести', image: '9 крести.png' },
  { rank: '10', suit: 'крести', image: '10 крести.png' },
  { rank: 'Валет', suit: 'крести', image: 'Валет крести.png' },
  { rank: 'Дама', suit: 'крести', image: 'Дама крести.png' },
  { rank: 'Король', suit: 'крести', image: 'Король крести.png' },
  { rank: 'Туз', suit: 'крести', image: 'Туз крести.png' },
];

const displayCards = (cards, storedValue) => {
  level1AppElement.innerHTML = '';
  level2AppElement.innerHTML = '';
  level3AppElement.innerHTML = '';

  shuffleDeck(cards);

  // Создайте элементы карт в цикле
  for (const data of cardData) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.rank = data.rank;
    cardElement.dataset.suit = data.suit;

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    cardFront.style.backgroundImage = `url(./img/${data.image})`;
    cardElement.appendChild(cardFront);

    if (storedValue === 'level 1') {
      level1AppElement.appendChild(cardElement);
    } else if (storedValue === 'level 2') {
      level2AppElement.appendChild(cardElement);
    } else {
      level3AppElement.appendChild(cardElement);
    }
  }
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
};
