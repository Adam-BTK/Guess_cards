const level1Label = document.querySelector('label[for="level1"]');
const level2Label = document.querySelector('label[for="level2"]');
const level3Label = document.querySelector('label[for="level3"]');

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





// console.log(levelElement.value)



