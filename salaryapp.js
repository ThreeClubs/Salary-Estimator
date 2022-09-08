const incomes = [
  "$45,760 - $52,000 🤓 Consider upskilling at Mission Ready HQ",
  "$52,001 - $62,400 🙂 You could be just starting out",
  "$62,401 - $83,200 😎 Comfortably in the middle",
  "$83,201 - $124,800 🤩 You're doing very well!",
  "$124,800+ Wow! 🤯 Are you a senior developer?",
];

const button = document.getElementById("button");
let resultDisplay = document.getElementById("resultDisplay");

function salaryModel() {
  let demand = 0;
  let supply = 0;
  let fetchDemand = document.getElementsByName("demand");

  for (i = 0; i < fetchDemand.length; i++) {
    if (fetchDemand[i].checked) {
      demand = fetchDemand[i].value;
    }
  }

  let fetchSupply = document.getElementsByName("supply");

  for (i = 0; i < fetchSupply.length; i++) {
    if (fetchSupply[i].checked) {
      supply = fetchSupply[i].value;
    }
  }

  if (demand === "High" && supply === "Low") {
    resultDisplay.textContent = incomes[4];
  } else if (
    (demand === "High" && supply === "Medium") ||
    (demand === "Medium" && supply === "Low")
  ) {
    resultDisplay.textContent = incomes[3];
  } else if (
    (demand === "Medium" && supply === "Medium") ||
    (demand === "High" && supply === "High") ||
    (demand === "Low" && supply === "Low")
  ) {
    resultDisplay.textContent = incomes[2];
  } else if (
    (demand === "Medium" && supply === "High") ||
    (demand === "Low" && supply === "Medium")
  ) {
    resultDisplay.textContent = incomes[1];
  } else {
    resultDisplay.textContent = incomes[0];
  }
}

button.addEventListener("click", salaryModel);
