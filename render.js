const level1AppElement = document.querySelector(".level1");
const level2AppElement = document.querySelector(".level2");
const level3AppElement = document.querySelector(".level3");

export const renderGamePage = (storedValue) => {
  const level1PageHtml = `
    <span class="level1">Легкий уровень</span>
    <div class="choose_box level1 level2 level3">        
    </div>
    <button class="level1_btn" id="level1_btn">Начать заново</button>
    `;
  const level2PageHtml = `
    <span class="level2">Средний уровень</span>
    <div class="choose_box level1 level2 level3">        
    </div>
    <button class="level2_btn" id="level2_btn">Начать заново</button>
    `;
  const level3PageHtml = `
    <span class="level3">Сложный уровень</span>
    <div class="choose_box level1 level2 level3">        
    </div>
    <button class="level3_btn" id="level3_btn">Начать заново</button>
    `;

  if (storedValue === "level 1") {
    level1AppElement.innerHTML = level1PageHtml;
  } else if (storedValue === "level 2") {
    level2AppElement.innerHTML = level2PageHtml;
  } else {
    level3AppElement.innerHTML = level3PageHtml;
  }
};
