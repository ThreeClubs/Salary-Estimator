const incomes = [
  "low: $45,760 - $52,000",
  "low-medium: $52,001 - $62,400",
  "medium: $62,401 - $83,200",
  "medium-high: $83,201 - $124,800",
  "high: 124,800+",
];

const button = document.getElementById("button");
button.addEventListener("click", salaryModel);

function salaryModel() {
  let resultDisplay = document.getElementById("resultDisplay");
  let demand = document.getElementById("demand").value;
  let supply = document.getElementById("supply").value;
  if (demand === "high" && supply === "low") {
    resultDisplay.textContent = incomes[4];
  } else if (
    (demand === "high" && supply === "medium") ||
    (demand === "medium" && supply === "low")
  ) {
    resultDisplay.textContent = incomes[3];
  } else if (
    (demand === "medium" && supply === "medium") ||
    (demand === "high" && supply === "high") ||
    (demand === "low" && supply === "low")
  ) {
    resultDisplay.textContent = incomes[2];
  } else if (
    (demand === "medium" && supply === "high") ||
    (demand === "low" && supply === "medium")
  ) {
    resultDisplay.textContent = incomes[1];
  } else  {
    resultDisplay.textContent = incomes[0];
  }
}