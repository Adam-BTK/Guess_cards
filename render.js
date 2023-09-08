const level1AppElement = document.querySelector('.level1')

export const renderLevel1Page = () => {
    const level1PageHtml = `
    <span class="level1">Легкий уровень</span>
    <div class="prod_checbox">        
    </div>
    <button class="level1_btn" id="level1_btn">Начать заново</button>
    `;
  
    level1AppElement.innerHTML = level1PageHtml;   
  };


