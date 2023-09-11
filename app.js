import { renderGamePage } from "./render.js";

const appElement = document.getElementById("app");

const renderStartPage = () => {
    const startPageHtml = `
    <span class="choose_level">Выбери сложность</span>
    <div class="prod_checbox">
        <div class="radio-toolbar">
            <input type="radio" id="level1" name="radios" value="easy" checked class="input_level">
            <label for="level1"><span>1</span></label>

            <input type="radio" id="level2" name="radios" value="medium">
            <label for="level2"><span>2</span></label>

            <input type="radio" id="level3" name="radios" value="hard">
            <label for="level3"><span>3</span></label>
        </div>
    </div>
    <button class="start_btn level1_btn level2_btn level3_btn" id="start_btn">Старт</button>
    `;

    appElement.innerHTML = startPageHtml;
};

renderStartPage();

const level1Label = document.querySelector('label[for="level1"]');
const level2Label = document.querySelector('label[for="level2"]');
const level3Label = document.querySelector('label[for="level3"]');
const startBtnElement = document.getElementById("start_btn");

function toLocalStorage(value) {
    localStorage.setItem("level", JSON.stringify(value));
}

level1Label.addEventListener("click", () => {
    toLocalStorage("level 1");
    console.log(localStorage.getItem("level"));
});

level2Label.addEventListener("click", () => {
    toLocalStorage("level 2");
    console.log(localStorage.getItem("level"));
});

level3Label.addEventListener("click", () => {
    toLocalStorage("level 3");
    console.log(localStorage.getItem("level"));
});

function getFromLocalStorage() {
    const storedValue = localStorage.getItem("level");
    // Checking if storedValue is not null or undefined
    if (storedValue !== null && storedValue !== undefined) {
        return JSON.parse(storedValue);
    }

    return null;
}

startBtnElement.addEventListener("click", () => {
    const storedValue = getFromLocalStorage();
    console.log(storedValue);
    renderGamePage(storedValue);
});