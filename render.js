import { generateDeck, shuffleDeck } from './app.js';

const level1AppElement = document.querySelector('.level1');
const level2AppElement = document.querySelector('.level2');
const level3AppElement = document.querySelector('.level3');
const checkboxElement = document.getElementById('checkbox');

// Определение функции для генерации случайных карт
const generateRandomCards = (numberOfCards, deck) => {
  const selectedCards = deck.slice(0, numberOfCards);
  return selectedCards;
};

// Определение функции для отображения карт на игровом поле
const displayCards = (cards, storedValue) => {
  // Очистите игровой контейнер перед отображением новых карт
  level1AppElement.innerHTML = '';
  level2AppElement.innerHTML = '';
  level3AppElement.innerHTML = '';

  cards.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.index = index; // Храните индекс карты в атрибуте data

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    // Установите стиль для лицевой стороны карты (например, изображение масти и ранга)

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    // Установите стиль для обратной стороны карты (например, изображение "рубашки")

    cardElement.appendChild(cardFront);
    cardElement.appendChild(cardBack);

    // Установите фоновое изображение на лицевой стороне карты в зависимости от её индекса
    cardFront.style.backgroundImage = `url(./img/рубашка.png)`;

    // В зависимости от уровня сложности, добавьте карты на соответствующее игровое поле
    if (storedValue === 'level 1') {
      level1AppElement.appendChild(cardElement);
    } else if (storedValue === 'level 2') {
      level2AppElement.appendChild(cardElement);
    } else {
      level3AppElement.appendChild(cardElement);
    }
  });
};

// Определение функции для рендеринга игровой страницы
export const renderGamePage = (storedValue) => {
  checkboxElement.style.display = 'none';

  // Определите количество карт в зависимости от уровня сложности
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
  const selectedCards = generateRandomCards(numberOfCards, deck);

  displayCards(selectedCards);

  // Показывайте карты пользователю в течение 5 секунд
  setTimeout(() => {
    // Скройте карты
    // Добавьте обработчики кликов на карты и реализуйте логику сравнения
  }, 5000);

  // Добавьте обработчики кликов на карты и реализуйте логику сравнения
};
