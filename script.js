let opClick = 0;
let activeBtn;
let expression = {
    ["term1"]: "",
    ["term2"]: "",
    ["operator"]: "",
    ["equals"]: "",
};

// opClick = (opClick == 1) ? 0 : opClick;
const display = document.querySelector("#input")

for (let index = 0; index < 10; index++) {
    let button = document.createElement("button");
    button.id = `button_${index}`;
    button.classList.add(`button`);
    button.textContent = `${index}`;

    button.addEventListener("click", () => {
        if (opClick == 0) {
            expression["term1"] += Number(button.textContent);
            display.textContent += `${button.textContent}`
        }

        else {
            if (expression.term2 == "") display.textContent = "";
            expression["term2"] += Number(button.textContent);
            display.textContent += `${button.textContent}`;
            document.querySelectorAll(".active").forEach((btn) => btn.classList.remove("active"))
        }

    });

    let numbers = document.querySelector("#numbers");
    numbers.insertBefore(button, numbers.firstChild)
}
let operationBtns = document.querySelectorAll(".operation");
operationBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (opClick > 0) {
            evaluate(expression)
            expression.term2 = ""
        }
        expression["operator"] = btn.textContent
        document.querySelectorAll(".active").forEach((btn) => btn.classList.remove("active"))
        btn.classList.add("active")

        opClick = 1;

    })
}
)

const clear = document.querySelector("#clear")
clear.addEventListener("click", () => {
    expression = {
        ["term1"]: "",
        ["term2"]: "",
        ["operator"]: "",
        ["equals"]: "",
    }
    display.textContent = ""
    opClick = 0;
    console.log("cleared");
    document.querySelectorAll(".active").forEach((btn) => btn.classList.remove("active"))


})

const equals = document.querySelector("#equals")
equals.addEventListener("click", () => {
    opClick = 0;
    evaluate(expression)
    expression.term2 = ""
    document.querySelectorAll(".active").forEach((btn) => btn.classList.remove("active"))
})



const evaluate = function (expression) {
    let terms = Object.values(expression).slice(0, 2).map((item) => Number(item));
    console.log(terms);
    console.log(expression);


    if (expression.operator == "+") {
        expression.equals = sum(terms)
        display.textContent = `${expression.equals}`
    }
    else if (expression.operator == "x") {
        expression.equals = multiply(terms)
        display.textContent = `${expression.equals}`

    }

    else if (expression.operator == "/") {
        expression.equals = divide(terms)
        display.textContent = `${expression.equals}`
    }
    else if (expression.operator == "-") {
        expression.equals = subtract(terms)
        display.textContent = `${expression.equals}`
    }

    expression.term1 = Number(expression.equals);

    console.log(expression);

}


const subtract = function (arr) {
    const difference = arr.reduce((diff, value) => diff - value)
    return difference;
};

const sum = function (arr) {
    const sum = arr.reduce((sum, value) => sum + value, 0)
    return sum;
};

const multiply = function (arr) {
    const product = arr.reduce((product, value) => product * value)
    return product;
};

const divide = function (arr) {

    const product = arr.reduce((product, value) => product / value)
    return arr[1] == 0 ? 1 : product;
};

