for (let index = 0; index < 10; index++) {
    let button = document.createElement("button");
    button.id = `button_${index}`;
    button.classList.add(`button`);
    button.textContent = `${index}`;

    let numbers = document.querySelector("#numbers");
    numbers.appendChild(button)
}

function evaluate(expression) {

}