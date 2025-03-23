document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");

  // Criando o container principal
  const container = document.createElement("div");
  container.style.width = "250px";
  container.style.margin = "auto";
  container.style.padding = "20px";
  container.style.border = "1px solid #ddd";
  container.style.borderRadius = "10px";
  container.style.textAlign = "center";
  container.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.1)";

  // Criando botão de reset
  const resetButton = document.createElement("button");
  resetButton.innerText = "🔄";
  resetButton.style.marginTop = "10px";
  resetButton.style.fontSize = "18px";
  resetButton.onclick = function () {
    menCounter.count.value = 0;
    womenCounter.count.value = 0;
    updateTotal();
  };

  container.appendChild(resetButton);

  // Criando o título
  const title = document.createElement("h2");
  title.innerText = "Total";
  container.appendChild(title);

  // Criando o display do total
  const totalDisplay = document.createElement("input");
  totalDisplay.type = "text";
  totalDisplay.value = 0;
  totalDisplay.style.width = "50px";
  totalDisplay.style.padding = "10px";
  totalDisplay.style.textAlign = "center";
  totalDisplay.readOnly = true;
  container.appendChild(totalDisplay);

  // Criando função para criar contadores individuais
  function createCounter(label, imgSrc) {
    const counterDiv = document.createElement("div");
    counterDiv.style.marginTop = "20px";
    counterDiv.style.display = "flex";
    counterDiv.style.flexDirection = "column";
    counterDiv.style.alignItems = "center";

    const img = document.createElement("img");
    img.src = imgSrc;
    img.style.width = "50px";
    counterDiv.appendChild(img);

    const buttonsDiv = document.createElement("div");

    const addButton = document.createElement("button");
    addButton.innerText = "+";
    addButton.style.margin = "5px";
    addButton.style.border = "none";
    addButton.style.backgroundColor = "green";
    addButton.style.color = "white";
    addButton.style.borderRadius = "100%";
    addButton.style.fontSize = "25px";
    addButton.onclick = function () {
      count.value = parseInt(count.value) + 1;
      updateTotal();
    };

    const subtractButton = document.createElement("button");
    subtractButton.innerText = "-";
    subtractButton.style.margin = "5px";
    subtractButton.style.fontSize = "15px";
    subtractButton.style.backgroundColor = "red";
    subtractButton.style.borderRadius = "100%";
    subtractButton.style.color = "white";
    subtractButton.style.border = "none";
    subtractButton.onclick = function () {
      if (parseInt(count.value) > 0) {
        count.value = parseInt(count.value) - 1;
        updateTotal();
      }
    };

    buttonsDiv.appendChild(addButton);
    buttonsDiv.appendChild(subtractButton);
    counterDiv.appendChild(buttonsDiv);

    const labelText = document.createElement("p");
    labelText.innerText = label;
    counterDiv.appendChild(labelText);

    const count = document.createElement("input");
    count.type = "text";
    count.value = 0;
    count.style.width = "50px";
    count.style.textAlign = "center";
    count.readOnly = true;
    counterDiv.appendChild(count);

    return { counterDiv, count };
  }

  // Criando os contadores individuais
  const menCounter = createCounter("Homens", "./img/homem.jpeg");
  const womenCounter = createCounter("Mulheres", "./img/user-female.jpg");

  function updateTotal() {
    totalDisplay.value =
      parseInt(menCounter.count.value) + parseInt(womenCounter.count.value);
  }

  // Adicionando tudo ao container
  const containerHomemEMulher = document.createElement("div");
  containerHomemEMulher.style.display = "flex";
  containerHomemEMulher.style.justifyContent = "space-around";
  containerHomemEMulher.appendChild(menCounter.counterDiv);
  containerHomemEMulher.appendChild(womenCounter.counterDiv);
  container.appendChild(containerHomemEMulher);

  // Adicionando o container ao app
  app.appendChild(container);
});
