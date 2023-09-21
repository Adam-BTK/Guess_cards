const level1AppElement = document.querySelector('.level1');
const level2AppElement = document.querySelector('.level2');
const level3AppElement = document.querySelector('.level3');
const checkboxElement = document.getElementById('checkbox');

export const renderGamePage = (storedValue, appElement) => {
    appElement.style.display = 'none';
    const level1PageHtml = `    
    <div class="timer_btn_box"><div class="timer_img"><img src="./img/таймер.svg" alt=""></div>
    <button class="restart_btn" id="level1_btn">Начать заново</button> 
    </div>
    <div class="img_container">
    <div class="img_box">
    <img src="./img/рубашка.png" alt=""><img src="./img/рубашка.png" alt="">
    <img src="./img/рубашка.png" alt="">
    </div>
    <div class="img_box">
    <img src="./img/рубашка.png" alt=""><img src="./img/рубашка.png" alt="">
    <img src="./img/рубашка.png" alt="">
    </div>
    </div>  
    `;
    const level2PageHtml = `
    <div class="timer_btn_box"><div class="timer_img"><img src="./img/таймер.svg" alt=""></div>
    <button class="restart_btn" id="level1_btn">Начать заново</button> 
    </div>
    <div class="img_container">
    <div class="img_box">
    <img src="./img/рубашка.png" alt=""><img src="./img/рубашка.png" alt="">
    <img src="./img/рубашка.png" alt=""><img src="./img/рубашка.png" alt="">
    <img src="./img/рубашка.png" alt=""><img src="./img/рубашка.png" alt="">
    </div>
    <div class="img_box">
    <img src="./img/рубашка.png" alt=""><img src="./img/рубашка.png" alt="">
    <img src="./img/рубашка.png" alt=""><img src="./img/рубашка.png" alt="">
    <img src="./img/рубашка.png" alt=""><img src="./img/рубашка.png" alt="">
    </div>
    </div> 
    `;
    const level3PageHtml = `
    <div class="timer_btn_box"><div class="timer_img"><img src="./img/таймер.svg" alt=""></div>
    <button class="restart_btn" id="level1_btn">Начать заново</button> 
    </div>
    <div class="img_container">
    <div class="img_box">
    <img src="./img/рубашка.png" alt=""><img src="./img/рубашка.png" alt="">
    <img src="./img/рубашка.png" alt=""><img src="./img/рубашка.png" alt="">
    <img src="./img/рубашка.png" alt=""><img src="./img/рубашка.png" alt="">
    <img src="./img/рубашка.png" alt=""><img src="./img/рубашка.png" alt="">
    <img src="./img/рубашка.png" alt="">
    </div>
    <div class="img_box">
    <img src="./img/рубашка.png" alt=""><img src="./img/рубашка.png" alt="">
    <img src="./img/рубашка.png" alt=""><img src="./img/рубашка.png" alt="">
    <img src="./img/рубашка.png" alt=""><img src="./img/рубашка.png" alt="">
    <img src="./img/рубашка.png" alt=""><img src="./img/рубашка.png" alt="">
    <img src="./img/рубашка.png" alt="">
    </div>
    </div> 
    `;

    if (storedValue === 'level 1') {
        level1AppElement.innerHTML = level1PageHtml;
    } else if (storedValue === 'level 2') {
        level2AppElement.innerHTML = level2PageHtml;
    } else {
        level3AppElement.innerHTML = level3PageHtml;
    }
    // Cтиль display: none; для скрытия элемента
    checkboxElement.style.display = 'none';
};
