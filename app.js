// Определение функции для создания колоды карт
export const generateDeck = () => {
  const deck = [];

  // Генерируем имена файлов для карт в колоде
  for (let i = 0; i < 35; i++) {
    deck.push(`card${i + 1}.png`);
  }

  return deck;
};
//   В этом примере мы предполагаем, что у вас есть 52 уникальных изображения для каждой карты в колоде, и их имена идут от "card1.png" до "card52.png". Если у вас есть специфические правила для расположения карт по порядку, вы можете адаптировать этот код в соответствии с вашими требованиями.

// Определение функции для перемешивания колоды
export const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
};

import { renderGamePage } from './render.js';

const appElement = document.getElementById('app');

const renderStartPage = () => {
  const startPageHtml = `
    <span class="choose_level">Выбери сложность</span>
    <div class="prod_checkbox">
        <div class="radio-toolbar">
            <input type="radio" id="level1" name="radios" value="easy" checked class="input_level">
            <label for="level1"><span>1</span></label>

            <input type="radio" id="level2" name="radios" value="medium">
            <label for="level2"><span>2</span></label>

            <input type="radio" id="level3" name="radios" value="hard">
            <label for="level3"><span>3</span></label>
        </div>
    </div>
    <button class="start_btn" id="start_btn">Старт</button>
    `;

  appElement.innerHTML = startPageHtml;
};

renderStartPage();

const level1Label = document.querySelector('label[for="level1"]');
const level2Label = document.querySelector('label[for="level2"]');
const level3Label = document.querySelector('label[for="level3"]');
const startBtnElement = document.getElementById('start_btn');

function toLocalStorage(value) {
  localStorage.setItem('level', JSON.stringify(value));
}

level1Label.addEventListener('click', () => {
  toLocalStorage('level 1');
  console.log(localStorage.getItem('level'));
});

level2Label.addEventListener('click', () => {
  toLocalStorage('level 2');
  console.log(localStorage.getItem('level'));
});

level3Label.addEventListener('click', () => {
  toLocalStorage('level 3');
  console.log(localStorage.getItem('level'));
});

function getFromLocalStorage() {
  const storedValue = localStorage.getItem('level');
  // Checking if storedValue is not null or undefined
  if (storedValue !== null && storedValue !== undefined) {
    return JSON.parse(storedValue);
  }

  return null;
}

startBtnElement.addEventListener('click', () => {
  const storedValue = getFromLocalStorage();
  console.log(storedValue);
  renderGamePage(storedValue, appElement);
});
