const buttonValues = [
    "AC", "+/-", "%", "÷",
    "7", "8", "9", "×",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
];
const rightSymbols = ["÷", "×", "-", "+", "="];
const topSymbols = ["AC", "+/-", "%"];
const display = document.getElementById("display");
let A = 0
let operator = null
let B = null;
function clearAll() {
    A = 0
    operator = null;
    B = null;
}
for (let i = 0; i < buttonValues.length; i++) {
    let values = buttonValues[i]
    let buttons = document.createElement("button")
    buttons.innerText = values
    if (values === "0") {
        buttons.style.width = "200px"
        buttons.style.gridColumn = "span 2"
    }
    if (rightSymbols.includes(values)) {
        buttons.style.backgroundColor = "#FF9500"
    } else if (topSymbols.includes(values)) {
        buttons.style.backgroundColor = "D4D4D2"
        buttons.style.color = "1C1C1C"
    }
    buttons.addEventListener("click", function () {
        if (rightSymbols.includes(values)) {
            if (values == "=") {
                if (A != null) {
                    B = display.value
                    let NumA = Number(A)
                    let NumB = Number(B)
                    if (operator == "÷") {
                        display.value = NumA / NumB
                    } else if (operator == "×") {
                        display.value = NumA * NumB;
                    } else if (operator == "-") {
                        display.value = NumA - NumB
                    } else if (operator == "+") {
                        display.value = NumA + NumB
                    }
                    clearAll()
                }
            } else {
                operator = values;
                A = display.value;
                display.value = "";
            }

        } else if (topSymbols.includes(values)) {
            if (values == "AC") {
                clearAll();
                display.value = ""
            } else if (values == "+/-") {
                if (display.value != "" && display.value != 0) {
                    if (display.value[0] == "-") {
                        display.value = display.value.slice(1);
                    }
                    else {
                        display.value = "-" + display.value;
                    }
                }
            } else if (values == "%") {
                display.value = Number(display.value) / 100;
            }
        } else {
            if (values == ".") {
                if (display.value != "" && !display.value.includes(values)) {
                    display.value += values;
                }
            } else if (display.value === '0') {
                display.value = values;
            }
            else {
                display.value += values;
            }

        }
    })

    document.getElementById("buttons").appendChild(buttons)
}