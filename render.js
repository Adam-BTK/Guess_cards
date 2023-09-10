const level1AppElement = document.querySelector('.level1');
const level2AppElement = document.querySelector('.level2');
const level3AppElement = document.querySelector('.level3');


export const renderLevel1Page = () => {
  const level1PageHtml = `
    <span class="level1">Легкий уровень</span>
    <div class="choose_box level1 level2 level3">        
    </div>
    <button class="level1_btn" id="level1_btn">Начать заново</button>
    `;

  level1AppElement.innerHTML = level1PageHtml;
};

export const renderLevel2Page = () => {
  const level2PageHtml = `
    <span class="level2">Средний уровень</span>
    <div class="choose_box level1 level2 level3">        
    </div>
    <button class="level2_btn" id="level2_btn">Начать заново</button>
    `;

  level2AppElement.innerHTML = level2PageHtml;
};

export const renderLevel3Page = () => {
  const level3PageHtml = `
    <span class="level3">Сложный уровень</span>
    <div class="choose_box level1 level2 level3">        
    </div>
    <button class="level3_btn" id="level3_btn">Начать заново</button>
    `;

  level3AppElement.innerHTML = level3PageHtml;
};