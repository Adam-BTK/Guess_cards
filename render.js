const level1AppElement = document.querySelector('.level1');
const level2AppElement = document.querySelector('.level2');
const level3AppElement = document.querySelector('.level3');

export const renderGamePage = (storedValue, appElement) => {
    appElement.style.display = 'none';
    const level1PageHtml = `    
    <div><img src="./img/таймер.svg" alt=""></div>
    <button class="restart_btn" id="level1_btn">Начать заново</button>    
    `;
    const level2PageHtml = `
    <div><img src="./img/таймер.svg" alt=""></div>    
    <button class="restart_btn" id="level2_btn">Начать заново</button>
    `;
    const level3PageHtml = `
    <div><img src="./img/таймер.svg" alt=""></div>   
    <button class="restart_btn" id="level3_btn">Начать заново</button>
    `;

    if (storedValue === 'level 1') {
        level1AppElement.innerHTML = level1PageHtml;
    } else if (storedValue === 'level 2') {
        level2AppElement.innerHTML = level2PageHtml;
    } else {
        level3AppElement.innerHTML = level3PageHtml;
    }
};
