const app = document.getElementById("app");
app.style.display = "flex";
app.style.flexDirection = "column";
app.style.alignItems = "center";
app.style.justifyContent = "center";
app.style.height = "100vh";

const calculator = document.createElement("div");
calculator.style.background = "black";
calculator.style.borderRadius = "20px";
calculator.style.padding = "20px";
app.appendChild(calculator);

const display = document.createElement("div");
display.style.color = "white";
display.style.fontSize = "3rem";
display.style.textAlign = "right";
display.style.width = "320px";
display.style.padding = "10px";
display.style.overflowX = "auto";
display.style.wordWrap = "break-word";
display.innerText = "0";
calculator.appendChild(display);

let expression = "";

const buttons = [
  ["AC", "+/-", "%", "÷"],
  ["7", "8", "9", "×"],
  ["4", "5", "6", "−"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];

const isOperator = (char) => ["+", "−", "×", "÷"].includes(char);

buttons.forEach((row) => {
  const rowDiv = document.createElement("div");
  rowDiv.style.display = "flex";
  calculator.appendChild(rowDiv);

  row.forEach((btn) => {
    const button = document.createElement("button");
    button.innerText = btn;
    button.style.flex = btn === "0" ? "2" : "1";
    button.style.fontSize = "2rem";
    button.style.padding = "20px";
    button.style.margin = "5px";
    button.style.borderRadius = "50%";
    button.style.border = "none";
    button.style.width = "70px";
    button.style.height = "70px";
    button.style.cursor = "pointer";

    if (btn === "0") {
      button.style.borderRadius = "35px";
      button.style.width = "150px";
    }

    if (["÷", "×", "−", "+", "="].includes(btn)) {
      button.style.background = "orange";
      button.style.color = "white";
    } else if (["AC", "+/-", "%"].includes(btn)) {
      button.style.background = "gray";
      button.style.color = "black";
    } else {
      button.style.background = "#333";
      button.style.color = "white";
    }

    rowDiv.appendChild(button);

    button.addEventListener("click", () => {
      if (btn === "AC") {
        expression = "";
        display.innerText = "0";
      } else if (btn === "=") {
        try {
          const result = eval(
            expression.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-")
          );
          expression = result.toString();
          display.innerText = expression;
        } catch {
          display.innerText = "Erro";
          expression = "";
        }
      } else if (btn === "%") {
        try {
          const lastNumber = expression.match(/(\d+\.?\d*)$/);
          if (lastNumber) {
            const percent = parseFloat(lastNumber[0]) / 100;
            expression = expression.replace(/(\d+\.?\d*)$/, percent);
            display.innerText = expression;
          }
        } catch {
          display.innerText = "Erro";
        }
      } else if (btn === "+/-") {
        const lastNumber = expression.match(/(\-?\d+\.?\d*)$/);
        if (lastNumber) {
          const negated = parseFloat(lastNumber[0]) * -1;
          expression = expression.replace(/(\-?\d+\.?\d*)$/, negated);
          display.innerText = expression;
        }
      } else {
        // Evita operadores duplicados seguidos
        const lastChar = expression[expression.length - 1];
        if (isOperator(lastChar) && isOperator(btn)) return;

        if (expression === "" && isOperator(btn)) return;

        expression += btn;
        display.innerText = expression;
      }

      // Ajustar fonte conforme tamanho do texto
      if (display.innerText.length > 12) {
        display.style.fontSize = "2rem";
      } else {
        display.style.fontSize = "3rem";
      }
    });
  });
});
